import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props) {
        super(props);

        // this.state = { term: '' }
    }

    render() {
        return (
            <div className="search-bar">
                <img id="logo-img" src="img/logo.png" alt="Puppy video application logo"/>
                <input
                    placeholder='Search Puppy Videos'
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        // this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
