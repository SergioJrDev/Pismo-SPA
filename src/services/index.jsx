import Axios from 'axios';
import { getUsers, updateUsers, createUser} from './../services/localStorage'

let
    loggedIndex = JSON.parse(localStorage.getItem("loggin")),
    allUsers = getUsers(),
    favorites = allUsers[loggedIndex] ? allUsers[loggedIndex].fav : [];

export function SearchAPI(term, dispatch) {
    if(term === null) {
        dispatch({});
        return;
    }
    
    let { title, director, actor } = term;
    let url = 'http://netflixroulette.net/api/api.php'

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
    allUsers[loggedIndex].fav = favorites.concat(e);
    updateUsers(allUsers);
    return favorites = favorites.concat(e);
}

export function removeFavorites(e) {
    favorites = _.filter(favorites, item => item.unit !== e.unit);
    allUsers[loggedIndex].fav = favorites;
        updateUsers(allUsers);
}