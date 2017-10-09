import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/vid_list';
import VideoSelected from './components/vid_selected';
const API_KEY = 'AIzaSyDQ8xC7JnDHXPEs63WxfhbIaAf0297Kr8o';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        // Initial search
        this.videoSearch('puppies');
    }

    videoSearch(term) {
        // Extra logic to make sure all searches provide puppy videos from YouTube
        if (term === "puppies") {
            term = term;
        } else {
            term = term + "puppies";
        }
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoSelected video={this.state.selectedVideo} />
                <VideoList
                onVideoSelect={clickedVideo => this.setState({selectedVideo: clickedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
