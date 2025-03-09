// lib/youtube.ts
// lib/youtube.ts
export interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    publishedAt: string;
    thumbnail: string;
    channelTitle: string;
    viewCount: string;
    channelId: string;
  }
  
  interface YouTubeApiResponse {
    items: Array<{
      id: { videoId: string };
      snippet: {
        channelId: any;
        title: string;
        description: string;
        publishedAt: string;
        thumbnails: { high: { url: string } };
        channelTitle: string;
      };
      statistics?: {
        viewCount: string;
      };
    }>;
    nextPageToken?: string;
  }
  
 
  
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
  
  export async function fetchAllVideos(): Promise<YouTubeVideo[]> {
    let videos: YouTubeVideo[] = [];
    let pageToken = '';
    let hasMore = true;
  
    while (hasMore) {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50&pageToken=${pageToken}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch videos');
      
      const data: YouTubeApiResponse = await response.json();
      
      videos = [
        ...videos,
        ...data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails.high.url,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          viewCount: '0' // Statistics require separate API call
        }))
      ];
  
      pageToken = data.nextPageToken || '';
      hasMore = !!pageToken;
    }
  
    // Fetch statistics for all videos
    const statistics = await Promise.all(
      videos.map(async video => {
        const statsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${video.id}&part=statistics`;
        const response = await fetch(statsUrl);
        const data = await response.json();
        return data.items[0]?.statistics?.viewCount || '0';
      })
    );
  
    return videos.map((video, index) => ({
      ...video,
      viewCount: statistics[index]
    }));
  }