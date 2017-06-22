import React, { Component } from 'react'
import Search from './search'
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
                <Search up={this.updateResults} />
                <Results addFavorite={this.updateFavorite} data={this.state} />
            </div>
        )
    }
};

export default App;