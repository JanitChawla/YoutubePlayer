import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
const renderedlist = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
});

    return <div className="ui relaxed divided list">{renderedlist}</div>;
};

export default VideoList;