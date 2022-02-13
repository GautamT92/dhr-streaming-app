import axios from 'axios';
import { UPDATE_MOVIES, UPDATE_SEARCH, UPDATE_SECTION } from './movie.types';

export const BASEURL = `https://my-json-server.typicode.com/GautamT92/dhr-streaming-app/`

export const addMovies = (currentPage) => {
    return dispatch => {
        axios.get(`${BASEURL}/contents?_page=${currentPage}&_limit=1`).then((res) => {
            const movies = res?.data[0].content?.map(a => ({ ...a, id: Math.random() }));
            dispatch({ type: UPDATE_MOVIES, payload: movies })
        })
    }

};


export const fetchConfig = () => {
    return dispatch => {
        axios.get(`${BASEURL}/section`).then((res) => {
            const section = res?.data;
            dispatch({ type: UPDATE_SECTION, payload: section })
        })
    }

};



export const updateSearch = search => {
    return dispatch => {
        dispatch({ type: UPDATE_SEARCH, payload: search })
    }


};
