import React, { Component } from 'react';
import Login from '../screens/login/Login';
import Home from '../screens/home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Controller extends Component {

    constructor() {
        super();
        // this.baseUrl = "";
    }


    homePageHandler = () => {
        
    }

    render() {

        return (

            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props}  />} />
                    <Route exact path='/home' render={({history}, props) => <Home history={history} {...props}  homePageHandler={this.homePageHandler} />} />
                 

                </div>
            </Router>


        )
    }
}

export default Controller;