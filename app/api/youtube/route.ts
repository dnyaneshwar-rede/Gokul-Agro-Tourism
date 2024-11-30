import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function GET() {
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
    return NextResponse.json(
      { error: 'Missing API key or channel ID in environment variables' },
      { status: 500 }
    );
  }

  try {
    // Fetch uploads playlist ID
    const channelUrl = `${API_BASE_URL}/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    const channelResponse = await fetch(channelUrl);
    const channelData = await channelResponse.json();

    if (!channelResponse.ok) {
      throw new Error(channelData.error?.message || 'Failed to fetch channel details.');
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Fetch videos from uploads playlist
    const playlistUrl = `${API_BASE_URL}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}&maxResults=10`;
    const playlistResponse = await fetch(playlistUrl);
    const playlistData = await playlistResponse.json();

    if (!playlistResponse.ok) {
      throw new Error(playlistData.error?.message || 'Failed to fetch videos.');
    }

    const videos = playlistData.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));

    return NextResponse.json({ videos });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
