import React from 'react';
import {connect} from 'react-redux';
import ToolsForm  from '../components/tools-form';
import requiresLogin from '../components/requires-login';

/*
    Enter new tool
*/
export function ToolsFormPage(props) {
   
    return (

        <section  className="wrapper  special">  
        <h2>Tools Form</h2>       
          <ToolsForm />
        </section>
    )
} 
 
const mapStateToProps = state => ({
    currentUser:state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});
 
export default requiresLogin()(connect(mapStateToProps)(ToolsFormPage));