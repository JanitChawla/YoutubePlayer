import React from 'react';

const VideoDeatail = ({video}) => {
        if(!video){
            return <div>Loading..</div>;
        }

        const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videosrc} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );

};


export default VideoDeatail;