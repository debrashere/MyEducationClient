import React from 'react';
import {connect} from 'react-redux';
import ToolsForm  from '../components/tools-form';

export function ToolsFormPage(props) {
   
    let error;
    if (!props.loggedIn)  {
        error = (
            <div className="form-error" aria-live="polite">
                You must login or register to access this app.
            </div>
        );     
    } 
    return (

        <section  className="wrapper  special">  
        <h2>Tools Form</h2>  
          {error}
          <ToolsForm />
        </section>
    )
} 
 
const mapStateToProps = state => ({
    currentUser:state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});
export default connect(mapStateToProps)(ToolsFormPage);