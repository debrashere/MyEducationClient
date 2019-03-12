import React from 'react';
import {connect} from 'react-redux';
import {CustomMenu} from './customMenu';
let currentRoute ="/home";
 
export class HeaderBar extends React.Component {
    componentWillUpdate() {
         if (this.props && this.props.route)
            currentRoute = this.props.route;
    } 
 
    render() {                             
        
        // Only render the user information if the user is logged in
        let userInfo;
        let menuParams = {route: currentRoute, loggedIn: this.props.loggedIn};
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
                <CustomMenu {...menuParams} dispatch={this.props.dispatch} />
                <div>
                    {userInfo}
                </div>
            </header>    								         
        );        
    }
}

const mapStateToProps = state => ({  
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null,
    unlisten: state
});

export default connect(mapStateToProps)(HeaderBar);