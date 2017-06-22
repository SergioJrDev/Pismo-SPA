import Axios from 'axios';


export function SearchAPI(term, dispatch) {
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

    Axios.get(url).then(res => dispatch(res.data)).catch(error => console.log('error', error));
    
}