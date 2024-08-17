// TODO: stronger typesetting
import type { ChannelObject, ImageObject, VideoObject } from "./objects";

export interface ChannelData {
    author: string,
    authorId: string,
    authorUrl: string,
    authorVerified: string,
    authorBanners: ImageObject[],
    authorThumbnails: ImageObject[],
    subCount: number,
    totalViews: number,
    joined: number,
    autoGenerated: boolean,
    isFamilyFriendly: boolean,
    description: string,
    descriptionHtml: string,
    allowRegions: string[],
    tabs: string[],
    latestVideos: VideoObject[],
    relatedChannels: ChannelObject[]
}

export interface ChannelVidData {
    videos: VideoObject[],
    continuation: string
}