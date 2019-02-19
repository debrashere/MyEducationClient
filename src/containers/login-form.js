import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from '../components/input';
import {login} from '../actions/auth';
import {Redirect} from 'react-router-dom';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
         return this.props.dispatch(login(values.username, values.password))     
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );            
        }
        if (this.props.submitSucceeded === true){         
           return <Redirect to="/dashboard" />
        }

        return (
            <section  className="wrapper  special" tabIndex="0"> 
            <h2>Welcome to My Educational Tools App</h2>          
                <form
                    className="form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <label htmlFor="username">Username</label>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />          
                    <button disabled={this.props.pristine || this.props.submitting}>                  
                        Log in
                    </button>
                
                    <Link to="/register">       
                        Register
                    </Link>
                </form>
            </section>            
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
