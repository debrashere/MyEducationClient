import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Banner extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }      
 
    render() {    
        return (            
            <section id="banner">         
                <h1>Welcome to My Educational Tools App</h1>
                <p>View educational tools ratings, read the blog and track your educational plan .</p>         
            </section>   
        )   
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Banner);
