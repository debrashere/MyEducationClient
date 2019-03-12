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
                <h1>My Educational Tools</h1>                
                <Link className="styled-link" to="/tools">View list of educational tools</Link>
                <Link className="styled-link" to="/comments">See what user's are commenting</Link>

            </section>   
        )   
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Banner);
