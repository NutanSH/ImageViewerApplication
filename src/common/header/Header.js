import React, { Component } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        color: 'initial',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    search: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#c0c0c0',
        marginLeft: '70%',
        width: '300px',
        verticalAlign: 'center',
    },
    searchIcon: {
        height: '100%',
        color: 'black',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },

});

class Header extends Component {


    constructor(props) {
        super();
        this.state = {
            searchTerm: '',
            modalIsOpen: false,
            menuIsOpen: false,
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
            names: [
                'John',
                'George',
                'Mary',
                'Leonardo'
            ]
        }
    }


    searchPostHandler = (e) => {

        this.setState({ searchTerm: e.target.value })
        console.log(e.target.value);
    }



    logoutHandler = () => {
        sessionStorage.removeItem("access-token");
        this.setState({
            loggedIn: false
        });
    }


    openMenuHandler = () => {
        this.setState({
            menuIsOpen: true,
        });

    }

    closeMenuHandler = () => {
        this.setState({
            menuIsOpen: false
        });
    }


    render() {

const { classes } = this.props;

        return (



            <div>

                <header className="app-header">

                    <div className="logoText">
                        <Typography noWrap>
                            Image Viewer
          </Typography>
                    </div>

                    {this.props.showProfileIcon === "true"
                        ?

                        <div className="profileIcon">
                            <IconButton onClick={this.openMenuHandler}>
                                <Avatar alt="profilepicture"
                                    aria-controls="simpleMenu"
                                    src={require('../../assets/profile_pic.jpg')}
                                    style={{ display: 'flex' }} />


                            </IconButton>
                        </div>
                        : ""
                    }

                    {this.props.showSearchBar === "true" ?

                        <Paper component="form" className="searchBarStyle" >

                            <IconButton className="searchIcon" type="submit" aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Input className="searchField"
                                disableUnderline={true} type="text"
                                placeholder="Search..."
                                onChange={this.searchPostHandler}
                                value={this.state.searchTerm}
                            />


                        </Paper>

                        : ""
                    }


                    <div>
                        <Menu
                            id="menu-appbar"
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            open={this.state.menuIsOpen}
                            onClose={this.closeMenuHandler}

                        >
                            <Link to='/profile' style={{ textDecoration: 'none' }} >
                                <MenuItem >My Account</MenuItem></Link><hr />
                            <Link to='/' style={{ textDecoration: 'none' }} >
                                <MenuItem onClick={this.logoutHandler}>Logout</MenuItem></Link>
                        </Menu>
                    </div>


                </header>


            </div>
        )
    }
}



export default withStyles(styles)(Header);