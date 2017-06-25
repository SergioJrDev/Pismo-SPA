import React, { Component } from 'react'
import Search from './search'
import Favorite from './favorite'
import Results from './results'

import { addFavorites } from './../services/index'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            loading: false
        }

        this.updateResults = this.updateResults.bind(this);
        this.updateFavorite = this.updateFavorite.bind(this);
    }

    updateResults(e) {
        this.setState({...this.state, result: e})
    }

    updateFavorite(e) {
        addFavorites(e);
    }

    render() {   
        return (
            <div>
                <Search up={this.updateResults} />
                <Results addFavorite={this.updateFavorite} data={this.state.result} />
            </div>
        )
    }
};

export default App;