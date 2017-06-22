import Axios from 'axios';


export function SearchAPI(term, dispatch) {
    
    const url = 'http://netflixroulette.net/api/api.php?title='
    Axios.get(url+term).then(res => dispatch(res.data)).catch(error => console.log('error', error));
    


}