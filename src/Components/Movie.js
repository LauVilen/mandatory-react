import React from "react";
import { connect } from "react-redux";
import { selectMovie } from "../redux";

function Movie({movie, selectMovie}) {
    function checkStringLength(title){
        if(title.length > 20){
            return title.slice(0,19)+'...';
        }
        else return title
    }
    if(movie)return (
    <li className="gallery" onClick={() => selectMovie(movie)}>     
            <img className="rounded" alt='Poster' src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+movie?.poster_path}></img>
        <div className="desc">{checkStringLength(movie.title)}</div>
    </li> );
}

const mapStateToProps = state => {
    return{
        selectedMovie: state.selectedMovie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectMovie: (movie) => dispatch(selectMovie(movie))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);