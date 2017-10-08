import React from 'react';

// {video}: the props object passed in from VideoList component has an object
// called 'video', so pass that in so we don't have to call props.video.yadayada
const VideoListItem = ({video, onVideoSelect}) => {
    const imgURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgURL}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                    {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
