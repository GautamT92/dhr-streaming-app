
import { UPDATE_MOVIES, UPDATE_SEARCH, UPDATE_SECTION } from './movie.types';


const INITIAL_STATE = {
    section: null,
    search: "",
    movies: [],
    pageMax: 3
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UPDATE_MOVIES:
            const { payload } = action
            return {

                ...state, movies: [...state.movies, ...payload]
            };

        case UPDATE_SECTION:
            const { payload: section } = action
            return {

                ...state, section
            };

        case UPDATE_SEARCH:
            const { payload: search } = action
            return {

                ...state, search
            };
        default: return state;
    }

};

export default reducer;