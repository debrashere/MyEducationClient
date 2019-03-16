import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import CustomMenu from './customMenu';
import Banner from './banner/banner';
import Footer from './footer/footer';
import LoginForm from './login/login-form';
import LandingPage from './landing-page';
import Dashboard from './dashboard/dashboard';
import BlogPage from './blogs/blog-page';
import BlogsPage from './blogs/blogs-page';
import ToolsPage from './tools/tools-page';
import ToolsForm from './tools/tools-form';
import EditToolsForm from './tools/tools-editForm';
import RegistrationForm from './login/registration-form';
import {refreshAuthToken, clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {ToolsOverview} from './tools/tools-overview';
import {Contacts} from './footer/contacts';
import {Terms} from './footer/terms';
let currentRoute;

export class App extends React.Component {
    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
          currentRoute = `${location.pathname}${location.search}${location.hash}`
        })      
      }

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
        this.unlisten();
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

    logOut = () => {      
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let menuParams = {route: currentRoute, loggedIn: this.props.loggedIn};
        let userParams = {currentUser: this.props.currentUser, loggedIn: this.props.loggedIn };
        
        return (
            <div className="app">         
                <CustomMenu  {...menuParams}  logOut={this.logOut}/>          
                <HeaderBar {...userParams}/> 
                <Banner />  
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/landingpage" component={LandingPage} />
                <Route exact path="/login" component={LoginForm} />                                
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={RegistrationForm} />  
                <Route exact path="/comment/:id" component={BlogPage} />                         
                <Route exact path="/comments" component={BlogsPage} />
                <Route exact path="/tools" component={ToolsPage} />                                           
                <Route exact path="/toolsform/:id" component={ToolsForm} />
                <Route exact path="/toolseditform/:id" component={EditToolsForm} />
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
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));
