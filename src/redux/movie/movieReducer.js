import { FETCH_TOPMOVIES_FAILURE, FETCH_TOPMOVIES_SUCCESS, SELECT_MOVIE, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILURE } from "./movieTypes"

const initialState = {
    selectedMovie: null,
    movies: [],
    error: '',
    movieDetails: null
}

//moviesReducer sets the properties in the state depending on the type of action that is called.

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        //if the action type is a successful fetch request, we set the movies[] in the state to be the payload of the called action, which is an array of movies.
        case FETCH_TOPMOVIES_SUCCESS:
            console.log('returned successful request')
            return {
                movies: action.payload,
                error: '',
                selectedMovie: null
            }
        //if the action type is a failed fetch request, then we set the error property of the state to be the action payload instead
        case FETCH_TOPMOVIES_FAILURE:
            console.log('error when fetching from the api')
            return {
                ...state,
                movies: [],
                error: action.payload
            }
        default: return state
    }
}

export const selectedMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_MOVIE:
            console.log(state)
            return {
                //...state means that we keep the current state except for the specified properties
                ...state,
                selectedMovie: action.payload
            }
        default: return state
    }
}

export const movieDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIE_DETAILS_SUCCESS:
            return{
                ...state,
                movieDetails: action.payload
            }
        case FETCH_MOVIE_DETAILS_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default: return state
    }
}
