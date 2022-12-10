import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetails';

const Movies = () => (
    <Switch>
        <Route exaxt path='/' component={MovieList}/>
        <Route path='/MovieDetails/:Title' component={MovieDetail}/>
    </Switch>
)

export default Movies;