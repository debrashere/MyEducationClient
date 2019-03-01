import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Link, Redirect} from 'react-router-dom';
import './banner.css';

export class Banner extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        return <Redirect to="/landingpage" />;
    }      
 
    render() {    
        return (            
            <section id="banner">         
                <h1>Welcome to My Educational Tools</h1>
                <p>View educational tools, ratings, read and post comments.</p>         
                <Link className="styled-link" to="/tools">View list of tools</Link>
                <Link className="styled-link" to="/comments">See what user's are commenting</Link>

            </section>   
        )   
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Banner);
