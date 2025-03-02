export enum FeatureFlags {
    TRANSCRIPTIONS="transcriptions",
    IMAGE_GENERATION="image-generation",
    ANALYSE_VIDEO="video-analysis",
    TITLE_GENERATION="title-generations",
    SCRIPT_GENERATION="script-generation",
}

export const featureFlagEvents:Record<FeatureFlags,{event:string}> = {
    [FeatureFlags.TRANSCRIPTIONS]:{
        event:"trasncribe"
    },
    [FeatureFlags.IMAGE_GENERATION]:{
        event:"generate-image"
    },
    [FeatureFlags.ANALYSE_VIDEO]:{
        event:"analyse-video"
    },
    [FeatureFlags.TITLE_GENERATION]:{
        event:"generate-title"
    },
    [FeatureFlags.SCRIPT_GENERATION]:{
        event:""
    },

}