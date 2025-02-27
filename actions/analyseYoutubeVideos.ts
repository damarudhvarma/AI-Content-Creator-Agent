"use server";
import {redirect} from "next/navigation";

export async function analyseYoutubeVideos(formData: FormData){
    const url = formData.get('url') as string;
    if(!url){
        return;
    }
    const videoId = 'abc'; // todo fix this
    if(!videoId){
        return;
    }
    redirect(`/videos/${videoId}/analysis`);
}