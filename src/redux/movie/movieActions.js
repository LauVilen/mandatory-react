import { FETCH_TOPMOVIES_SUCCESS,FETCH_TOPMOVIES_FAILURE,SELECT_MOVIE, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILURE} from "./movieTypes";
import axios from "axios";

export const fetchTopMoviesSuccess = movies => {
    return {
        type: FETCH_TOPMOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchTopMoviesFailure = error => {
    return {
        type: FETCH_TOPMOVIES_FAILURE,
        payload: error
    }
}

export const selectMovie = (movie) => {
    console.log('selected movie: ' + movie.title)
    return{
        type: SELECT_MOVIE,
        payload: movie
    }
}

export const fetchMovieDetailsSuccess = movieDetails => {
    return{
        type: FETCH_MOVIE_DETAILS_SUCCESS,
        payload: movieDetails
    }
}

export const fetchMovieDetailsFailure = error => {
    return{
        type: FETCH_MOVIE_DETAILS_FAILURE,
        payload: error
    }
}

export const fetchTopMovies = () => {
    return (dispatch) => {
        axios.get('http://api.themoviedb.org/3/movie/popular?api_key=8eba5b61d64303cff9cebc8002e9b90f')
        .then(response => {
            const movies = response.data.results
            dispatch(fetchTopMoviesSuccess(movies))
            console.log('Fetched top movies. This is the response result:')
            console.log(response.data.results)
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchTopMoviesFailure(errorMsg))
            console.log('this is the error message:')
            console.log(errorMsg)
        })
    }
}

export const fetchMovieDetails = (id) => {
    return (dispatch) => {
        axios.get('http://api.themoviedb.org/3/movie/' + id + '?api_key=8eba5b61d64303cff9cebc8002e9b90f')
        .then(response => {
            const movieDetails = response.data
            dispatch(fetchMovieDetailsSuccess(movieDetails))
            console.log('http://api.themoviedb.org/3/movie/' + id + '?api_key=8eba5b61d64303cff9cebc8002e9b90f')
            console.log('Fetched movie details. This is the response results: ')
            console.log(response.data)
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchMovieDetailsFailure(errorMsg))
            console.log('this is the error message: ')
            console.log(errorMsg)
        })
    }
}

// http://api.themoviedb.org/3/movie/526896?api_key=8eba5b61d64303cff9cebc8002e9b90f

// export const fetchTest = () => async dispatch => {
//     const response = await theMoviedb.get('/3/movie/popular?api_key=8eba5b61d64303cff9cebc8002e9b90f')
//     dispatch({type: FETCH_TOPMOVIES_SUCCESS, payload: response.data.results})
// }