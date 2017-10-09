import React from 'react';

const VideoSelected = ({video}) => {
    // We need to do this to make sure that we create lag time to give our
    // App's state more time to store the videos from the AJAX call to YouTube
    // It is a return statement, so none of the other stuff below this check
    // will NOT run
    if (!video) {
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    // ES6 String Interpolation or Template String:
    // - Same as: 'https://www.youtube.com/embed/' + {videoId};
    // - Note: we used the `(backticks) rather than '(single quote)

    return(
        <div className="video-selected col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div className="video-title">{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoSelected;
