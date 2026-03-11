// app/api/youtube-videos/route.ts
import { NextResponse } from 'next/server';
import { fetchAllVideos } from '../../../lib/youtube';

export async function GET() {
  try {
    const videos = await fetchAllVideos();
    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export const revalidate = 3600; // Revalidate every hour