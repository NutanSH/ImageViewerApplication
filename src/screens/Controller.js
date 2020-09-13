import React, { Component } from 'react';
import Login from '../screens/login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CommonClient from "../client/CommonClient";

const commonClient = new CommonClient();

class Controller extends Component {

    render() {

        return (

            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props} />} />
                </div>
            </Router>


        )
    }
}

export default Controller;