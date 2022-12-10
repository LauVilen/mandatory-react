import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovieDetails } from "../redux";
import './MovieDetails.css';

class MovieDetails extends Component {

    componentDidMount(){
        this.props.fetchMovieDetails({id: this.props.selectedMovie.selectedMovie.id})
        console.log('Movie Details did mount')
        console.log(this.props.selectedMovie.selectedMovie.id)
    }

    render(){
        const genres = () => {if(this.props.movieDetails.movieDetails) return (
            this.props.movieDetails.movieDetails.genres.map(genre => {return genre.name})
            )
        return null}
        const genresComb = genres()?.join(', ')
        if(this.props.selectedMovie.selectedMovie && this.props.movieDetails.movieDetails)return(
            <div class='container'>
                <div class='row'>
                    <div class='col-md-6'>
                        <h2>{this.props.movieDetails.movieDetails.title}</h2>
                        <h6>{this.props.movieDetails.movieDetails.release_date.slice(0,4)}</h6>
                        <p>Genres: {genresComb}</p>
                        <br/>
                        <p>{this.props.movieDetails.movieDetails.overview}</p>
                    </div>
                    <div class='col-md-4'>
                    <img class="img-fluid rounded poster" alt='Poster' src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+ this.props.movieDetails.movieDetails.poster_path}></img>
                    </div>
                </div>
                <div className="row">
                    <div class='col-md-6'>
                    <button className="btn btn-dark"><Link className="link" to="/">Back</Link></button> 
                    </div>
                </div>
            </div>
        )
        return(
            <div>
                <h2>No content could be rendered</h2>
                <button><Link to='/'></Link>Back</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.selectedMovie,
        movieDetails: state.movieDetails
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovieDetails: ({id}) => dispatch(fetchMovieDetails(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)