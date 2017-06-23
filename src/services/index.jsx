import Axios from 'axios';

var favorites = [];

export function SearchAPI(term, dispatch) {
    if(term === null) {
        dispatch({});
        return;
    }
    
    let { title, director, actor } = term;
    var url = 'http://netflixroulette.net/api/api.php'

    if(title) {
        url = url+'?title='+title;
    }
    if(director) {
        url = url+'?director='+director;
    }
    if(actor) {
        url = url+'?actor='+actor;
    }

    Axios.get(url).then(res => dispatch(res.data)).catch(error => dispatch({error: error.response.data.message}));
}

export function getFavorites() {
    return favorites;
}

export function addFavorites(e) {
    return favorites = favorites.concat(e);
}

export function removeFavorites(e) {
    favorites = _.filter(favorites, item => item.unit !== e.unit);
}