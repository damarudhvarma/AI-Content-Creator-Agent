'use server'

import { VideoDetails } from "@/types/types";
import { google } from "googleapis"


const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY
})

export const getVideoDetails = async (videoId: string) => {
    console.log(" fetching video details", videoId);
    try {
        const videoResponse= await youtube.videos.list({
            part: ['snippet','statistics'],
            id: [videoId]
        });
        const videoDetails=videoResponse.data.items?.[0];

        if(!videoDetails) throw new Error("video not found");

        const channelResponse= await youtube.channels.list({
            part: ['snippet','statistics'],
            id: [videoDetails.snippet?.channelId|| ""],
            key: process.env.YOUTUBE_API_KEY
        });

        const channelDetails=channelResponse.data.items?.[0];

        console.log("video details fetched successfully");

        const video: VideoDetails={
            title: videoDetails.snippet?.title || "unknown Title",
            thumbnail:
            videoDetails.snippet?.thumbnails?.maxres?.url ||
            videoDetails.snippet?.thumbnails?.high?.url ||
            videoDetails.snippet?.thumbnails?.default?.url ||
            "",
            publishedAt: videoDetails.snippet?.publishedAt || new Date().toISOString(),

            views: videoDetails.statistics?.viewCount || "0",
            likes: videoDetails.statistics?.likeCount || "Not available",
            comments: videoDetails.statistics?.commentCount || "Not available",
            channel: {
                title: videoDetails.snippet?.channelTitle || "unknown channel",
                thumbnail:channelDetails?.snippet?.thumbnails?.default?.url || "",
                subscribers: channelDetails?.statistics?.subscriberCount || "0"
            }
        };
          return video;
      
    } catch (error) {
        console.error("Error fetching video details", error);
        return null;
    }
}