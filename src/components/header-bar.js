import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link} from 'react-router-dom';

export class HeaderBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    menuFunction() {
        var x = document.getElementById("myTopnav");      
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }    
    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <Link to="#" onClick={() => this.logOut()}>Log out</Link>
            );
        }
        let logInButton;
        if (!this.props.loggedIn) {
            logInButton = (
                 <Link to="/login" >Log In</Link>                                     		                  
            );
        }  
        let signUpButton;
        if (!this.props.loggedIn) {
            signUpButton = (
                <Link to="/register">Sign Up</Link>                                       		                  
            );
        } 
        let  menuButton = (
            /*
            <a href="javascript:void(0);" className="icon"                     
                 onClick={() => this.menuFunction()}>
                <i className="fa fa-bars"></i>
            </a> 
            */
            
             <Link  to="" onClick={() => this.menuFunction()}  className="icon" >
                <i className="fa fa-bars"></i> 
            </Link>   
                                                             		                  
        );         

        // Only render the user information if the user is logged in
        let userInfo;
        if (this.props.loggedIn) {               
            userInfo = (                 
                <div className="header-user-info">
                    <em>Username:</em> {this.props.currentUser.username} &nbsp;&nbsp;
                    <em> Name:</em> {this.props.currentUser.firstName} {this.props.currentUser.lastName}
                </div>                                                       
            );
        }       
        return (      
            <header> 
                <nav className="topnav" id="myTopnav">
                   <Link to="/" className="active">Home</Link>                     			                                    		                 
                   <Link to="/tools">Educational Tools</Link> 
                   <Link to="/blogs">Blogs</Link>           
                   {signUpButton}                                   		
                   {logInButton}
                   {logOutButton}
                   {menuButton}
                </nav>
                <div>
                    {userInfo}
                </div>
            </header>    								         
        );        
    }
}

const mapStateToProps = state => ({  
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);