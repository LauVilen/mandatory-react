import { combineReducers } from "redux";
import { movieDetailsReducer, moviesReducer, selectedMovieReducer } from "./movie/movieReducer";


const rootReducer = combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    movieDetails: movieDetailsReducer
    
})

export default rootReducer