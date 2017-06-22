import React, { Component } from 'react'
import Search from './search'
import Favorite from './favorite'
import Results from './results'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            favorite: []
        }

        this.updateResults = this.updateResults.bind(this);
        this. updateFavorite = this. updateFavorite.bind(this);
    }

    updateResults(e) {
        this.setState({...this.state, result: e})
    }

    updateFavorite(e) {
        this.setState({...this.state, favorite: this.state.favorite.concat(e)})
    }

    render() {   
        return (
            <div>
                <Favorite favorite={this.state.favorite} />
                <Search up={this.updateResults} />
                <Results addFavorite={this.updateFavorite} data={this.state.result} />
            </div>
        )
    }
};

export default App;