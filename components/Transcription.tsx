"use client";

import { FeatureFlags } from '@/features/flags';
import { useSchematicEntitlement } from '@schematichq/schematic-react';
import React, { useState } from 'react'
import Usage from './Usage';
import { file_v1 } from 'googleapis';


interface TranscriptEntry{
    text:string;
    timestamp:number;
}

const Transcription = ({videoId}:{
    videoId:string
}) => {

const {featureUsageExceed}=useSchematicEntitlement(FeatureFlags.TRANSCRIPTIONS);
const [transcript,setTranscript]=useState<{transcript:TranscriptEntry[];
    cache:string;
 }| null>(null);
 

  
  return (
    <div className='border p-4 pb-0 rounded-xl gap-4 flex flex-col '>
        <Usage
        featureFlag={FeatureFlags.TRANSCRIPTIONS}
        title='Transcription'   />

        {/* Transcription  */}
        {!featureUsageExceed?(
            <div className='flex flex-col gap-2 max-h-[250px]
            overflow-y-auto rounded-md p-4 '>
                {transcript? (
                    transcript.transcript.map((entry,index)=>(
                        <div key={index}
                        className='flex gap-2
                        ' >
                            <span className='text-sm text-gray-400 min-w-[50px]'>
                                {entry.timestamp}
                            </span>
                            <p className='text-sm text-gray-700'>{entry.text}</p>
                        </div>
                ))):(
                    <p className='text-sm text-gray-500'>No transcript available</p>
                )}
            </div>
        ):null

        }
    </div>
  )
}

export default Transcription