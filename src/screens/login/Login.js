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
            password: ""
        }
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
    }

    usernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {


        return (
            <div>
                <Header />



                <Card>

                    <CardContent >
                        <FormControl >
                            <Typography color="textSecondary">
                                LOGIN
                                    </Typography>
                        </FormControl><br />
                        <FormControl required>
                            <InputLabel htmlFor="userName">Username</InputLabel>
                            <Input id="username" onChange={this.usernameChangeHandler} />
                            <FormHelperText className={this.state.usernameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl><br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" onChange={this.passwordChangeHandler} /><br />
                            <FormHelperText className={this.state.passwordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                            {/* <FormHelperText>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText> */}
                        </FormControl><br /><br />
                        <FormControl>
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