import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import LoginForm from '../components/login-form';

export function LoginPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    console.log("CONTAINER props", props);
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
     return (
        <section  className="wrapper  special" tabIndex="0"> 
            <h2>Welcome to My Educational Tools App</h2>
            <LoginForm />
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);