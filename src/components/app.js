import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import Banner from './banner';
import Footer from './footer';
import LoginPage from '../containers/login-page';
import LandingPage from '../containers/landing-page';
import Dashboard from './dashboard';
import BlogPage from '../containers/blog-page';
import BlogsPage from '../containers/blogs-page';
import ToolsPage from '../containers/tools-page';
import ToolsFormPage from '../containers/tools-form';
import EditToolsPage from '../containers/tools-editForm';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import {ToolsOverview} from '../components/tools-overview';
import {Contacts} from '../components/contacts';
import {Terms} from '../components/termsAndConditions';


export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Banner />                  
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/landingpage" component={LandingPage} />
                <Route exact path="/login" component={LoginPage} />                                
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationPage} />  
                <Route exact path="/blog/:id" component={BlogPage} />                         
                <Route exact path="/blogs" component={BlogsPage} />
                <Route exact path="/tools" component={ToolsPage} />                  
                <Route exact path="/toolsform/:id" component={ToolsFormPage} />
                <Route exact path="/toolseditform/:id/:toolId" component={EditToolsPage} />
                <Route exact path="/toolsOverview" component={ToolsOverview} />  
                <Route exact path="/contacts" component={Contacts} /> 
                <Route exact path="/terms" component={Terms} /> 
                <Footer />                                            
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));