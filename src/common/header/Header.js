import React, { Component } from 'react';
import './Header.css';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const customStyles = {
    content: {
        top: '20%',
        left: '90%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    }
};

const styles = theme => ({
    

});

class Header extends Component {


    constructor(props) {
        super();
        this.state = {
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


    render(props) {

        const { classes } = this.props;

        return (



            <div>

                <header className="app-header">

                    <div className="logoText">
                        <Typography noWrap>Image Viewer</Typography>
                    </div>

                </header>


            </div>
        )
    }
}



export default withStyles(styles)(Header);