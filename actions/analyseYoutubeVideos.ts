"use server";
import { getVideoIdFromUrl } from "@/lib/getVideoIdFromUrl";
import {redirect} from "next/navigation";

export async function analyseYoutubeVideos(formData: FormData){
    const url = formData.get('url') as string;
    if(!url){
        return;
    }
    const videoId = getVideoIdFromUrl(url); 
    console.log("videoId", videoId);
    if(!videoId){
        return;
    }
    redirect(`/videos/${videoId}/analysis`);
}