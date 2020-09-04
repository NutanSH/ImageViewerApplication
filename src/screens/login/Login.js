import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';




class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            errorMessage: "dispNone"
        }
    }

    loginClickHandler = (e) => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
        const username = "TestUser";
        const password = "TestPwd";
        if (!(this.state.username === "" || this.state.password === "")) {
            if ((this.state.username === username) && (this.state.password === password)) {
                this.setState({ errorMessage: "dispNone" })
            }
            else {
                this.setState({ errorMessage: "dispBlock" })
            }
        }


    }

    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {

        const customStyle = {
            minWidth: 240,
            maxWidth: 240,
            left: '40%',
            position: 'absolute',
            top: '15%',
        };





        return (
            <div>
                <Header />



                <Card style={customStyle}>

                    <CardContent >
                        <FormControl >
                            <Typography color="textSecondary">
                                LOGIN
                                    </Typography>
                        </FormControl><br />
                        <FormControl required>
                            <InputLabel htmlFor="userName">Username</InputLabel>
                            <Input id="username" type="text" onChange={this.usernameChangeHandler} />
                            <FormHelperText className={this.state.usernameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" onChange={this.passwordChangeHandler} />
                            <FormHelperText className={this.state.passwordRequired}>
                                <span className="red">required</span>
                            </FormHelperText><br />
                        </FormControl>
                        <FormControl>
                            <FormHelperText className={this.state.errorMessage}>
                                <span className="red">Incorrect username and/or password</span>
                            </FormHelperText>
                            <br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                                LOGIN
                                    </Button>

                        </FormControl>

                    </CardContent>

                </Card>
            </div>

        )
    }
}

export default Login; 