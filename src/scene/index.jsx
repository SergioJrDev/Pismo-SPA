import React, { Component } from 'react'
import Search from './search'
import Favorite from './favorite'
import Results from './results'
import Header from './header'
import Footer from './footer'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: {},
            favorite: []
        }

        this.updateResults = this.updateResults.bind(this);
        this.updateFavorite = this.updateFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);

    }

    updateResults(e) {
        this.setState({...this.state, result: e})
    }

    updateFavorite(e) {
        this.setState({...this.state, favorite: this.state.favorite.concat(e)})
    }

    removeFavorite(e) {
        const filter = _.filter(this.state.favorite, item => item.unit !== e[0].unit)
        this.setState({...this.state, favorite: filter})
    }

    render() {   
        return (
            <div>
                <Header />
                {/*<Favorite removeFavorite={this.removeFavorite} favorite={this.state.favorite} />*/}
                <Search up={this.updateResults} />
                <Results addFavorite={this.updateFavorite} data={this.state.result} />
                <Footer />
            </div>
        )
    }
};

export default App;