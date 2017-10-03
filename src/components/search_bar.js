import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Search YouTube' }
    }

    render() {
        return (
            <div>
                <input
                    placeholder={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;
