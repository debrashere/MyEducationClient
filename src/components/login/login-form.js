import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from '../input';
import {login} from '../../actions/auth';
import {Redirect} from 'react-router-dom';
import {required, nonEmpty, validateField} from '../../validators';

let errors = [];
let error;
let validationErrors;

export class LoginForm extends React.Component {
    
    onSubmit(values) {     
        // perform validation before submitting login
        // Validation done here because it's optional depending if demo login 
        // is clicked which does not require validation
        error = '';       
        validationErrors = '';         
        errors = [];
        errors.push(validateField('Username', values.username, [required, nonEmpty]));
        errors.push(validateField('Password', values.password, [required, nonEmpty]));          
        if (errors.length > 0) {
            for (let index=0; index< errors.length; index++) {           
                if (errors[index].length > 0) {
                    validationErrors += ` ${errors[index][0]}  `
                }          
            }
            this.props.initialize({
                username: values.username,
                password:  values.password
            });
            // If validation errors found do not submit the form
            if (validationErrors.length > 0)
                return;                  
        }
        return this.props.dispatch(login(values.username, values.password))
    }
    /*
        Demo user does not require form validation
    */
    onDemoSubmit() { 
        return this.props.dispatch(login("demoUser", "Mypassw0rd"))                 
    }        

    render() {                   
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );            
        }
        if (validationErrors  && validationErrors.length > 0) {
            error = (
                <div className="form-error" aria-live="polite">
                    {validationErrors}
                </div>
            );            
        }
        if ((this.props.submitSucceeded && (error === undefined || error === '')) || this.props.loggedIn) {         
           return <Redirect to="/dashboard" />
        }

        return (
            <section  className="flex-container wrapper  special" tabIndex="0"> 
            <h2>Welcome to My Educational Tools App</h2>         
                <form  
                    className=" flex-item form"
                >
                    {error}                                                                                                          
                    <label htmlFor="username">Username</label>                    
                    <Field 
                        component={Input}                                                            
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"  
                        className="input-username" 
                    />    
                    <label htmlFor="password">Password</label>
                    <Field  
                        component={Input}                                                                                
                        type="password"
                        name="password"
                        value id="password"    
                        autoComplete="current-password"
                        className="input-password"                                                                        
                    /> 
                       <button 
                            disabled={this.props.pristine || this.props.submitting}                   
                            onClick={this.props.handleSubmit(values => this.onSubmit({...values}))}>
                            Log in
                        </button>
                        <button 
                            onClick={this.props.handleSubmit(values => this.onDemoSubmit())}>
                            Demo Log in
                        </button>
                
                    <Link to="/register">       
                        Register
                    </Link>
                </form>
            </section>            
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});
LoginForm = connect(  mapStateToProps  )(LoginForm)
export default reduxForm({
    form: 'loginForm',     
    onSubmitFail: (errors, dispatch) => dispatch(focus('loginForm', 'username'))    
})(LoginForm);
