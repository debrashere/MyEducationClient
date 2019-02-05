import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {DashboardMenu} from '../components/dashboard-menu';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard    
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    
        return (        
             <DashboardMenu />                   
        );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
