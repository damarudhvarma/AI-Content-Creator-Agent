'use client';
import ThumbnailGeneration from "@/components/ThumbnailGeneration";
import TitleGeneration from "@/components/TitleGeneration";
import Transcription from "@/components/Transcription";
import Usage from "@/components/Usage";
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails";
import { FeatureFlags } from "@/features/flags";

import { useParams } from "next/navigation";
import React from "react";

const Analysis = () => {

  const params = useParams<{videoId:string}>();
  const {videoId}=params;
  

  return (
    <div className="xl:container mx-auto px-4 md:px-9   ">
      {/* left side */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* right side */}
        <div className="order-2 border lg:order-1 flex flex-col gap-4 lg:border-r border-gray-200 p-6 ">
          {/* Analysis section */}
          <div className="border lg:order-1 flex flex-col gap-4 lg:border-r border-gray-200 p-6 rounded-xl">
          <Usage
            featureFlag={FeatureFlags.ANALYSE_VIDEO}
            title="Video Analysis"
          />
          {/* video Transcription status  */}
          </div>
          {/* youtube video analysis */}
          <YoutubeVideoDetails videoId={videoId} />
          
          
          {/* thumbnail Generation */}
          <ThumbnailGeneration  videoId={videoId} />
          {/* Title Generation */}
          <TitleGeneration videoId={videoId} />
          {/* Transcription */}
          <Transcription videoId={videoId} />
        
        </div>

        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:[calc(100vh-6rem)]">
          <p>Chat</p>
        </div>

      </div>
    </div>
  );
};

export default Analysis;
