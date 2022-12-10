import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import TestComponent from './TestComponent';
import Movies from './Movies';

class Main extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Movies}/>
                    <Route path='/MovieDetails' component={MovieDetails}/>
                    <Route path='/Test' component={TestComponent}></Route>
                </Switch>
            </div>
        )
    }
}

export default Main