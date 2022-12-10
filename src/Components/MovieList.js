import React, { Component } from 'react';
import './MovieList.css';
import Movie from './Movie';
import { connect } from 'react-redux';
import { fetchTopMovies } from '../redux';
import { Link } from 'react-router-dom';

class MovieList extends Component {

    componentDidMount() {
        console.log('component did mount')
        this.props.fetchTopMovies()
    }

    render() {
        console.log(this.props)
        console.log(this.props.movies)
        return (
            <div className='container'>
                <div className='moviegroup'>
                <h2>Today's pick of top movies</h2>
                    <ul className='movies'>
                        {
                            this.props.movies.movies.map(movie => {
                                return <Link to={`/MovieDetails/${movie.title}`} key={movie.id}>
                                    <Movie movie={movie}></Movie>
                                </Link>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }

}

//gives the component access to state via props
//is always named mapStateToProps
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

//allows the component to dispatch the action creator
//is always mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        fetchTopMovies: () => dispatch(fetchTopMovies())
    }
}

//connect method from redux gives the component access to state and dispatch through the provided functions
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);


  // componentDidMount(){
    //     axios.get('http://api.themoviedb.org/3/movie/popular?api_key=8eba5b61d64303cff9cebc8002e9b90f')
    //     .then(res => {
    //         this.setState({movies:res.data.results});
    //         console.log(res.data.results)
    //     })
    // }