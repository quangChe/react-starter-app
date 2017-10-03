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

        this.state = { videos: [] }

        YTSearch({key: API_KEY, term: 'puppies'}, (videos) => {
            this.setState({ videos });
            // { videos } same as { videos: videos }
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoSelected video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
