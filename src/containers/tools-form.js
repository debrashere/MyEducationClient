import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus } from 'redux-form';
import {Link, Redirect} from 'react-router-dom';
import {createTool} from '../actions/toolsActions';
import Input from '../components/input';
import {required, nonEmpty, isTrimmed, isUrlFormatValid, isNumeric, isRatingValid} from '../validators';

export class ToolsForm extends React.Component {  
    parsedUrl = (value) => {
        // make sure the url contains the protocol
        // default to http if protocol is missing        
        let parsedUrl = value;      
        if (!/^https?:\/\//i.test(parsedUrl)) {
            parsedUrl = 'http://' + parsedUrl;                   
        }
        return parsedUrl;
    }

    // Submit the new tool data  
    onSubmit(values) {
        let parsedUrl =   this.parsedUrl(values.url); 
        return this.props
            .dispatch(createTool(this.props.currentUser.username, values.title,
                parsedUrl, values.description, values.price,
                values.rating)) 
    }              

    render() {
        const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props
        let formattedError;     
        if (error) {
            formattedError =             
            <div className="message-error">
                {<strong>{error}</strong>}                 
            </div>
        }
        
        if ( submitSucceeded ) {         
            return <Redirect to="/tools" />
        }
    
        return ( 
            <div> 
                <h2>Tools Form</h2>   
                <form className="form"
                    onSubmit={handleSubmit(values => this.onSubmit(values) )}> 
                    {formattedError} 
                    <label htmlFor="title">Title</label>
                    <Field
                        component={Input}
                        type="text"
                        name="title"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                    
                    <label htmlFor="description">Description</label>
                    <Field component={Input}
                        type="text" 
                        name="description"
                        validate={[required, nonEmpty, isTrimmed]}
                    />

                    <label htmlFor="url">Url</label>
                    <Field
                        component={Input}
                        type="text"
                        name="url"
                        validate={[required, isTrimmed, isUrlFormatValid]}
                    />

                    <label htmlFor="price">Price</label>
                        <Field component={Input}
                        type="text" 
                        name="price"
                        placeholder="Number between 1 and 5"
                        validate={[required, nonEmpty, isTrimmed, isNumeric]}
                    />

                    <label htmlFor="rating">Rating</label>
                        <Field component={Input} type="text" name="rating"
                        validate={[required, isTrimmed, isNumeric, isRatingValid]}
                    />
                                
                    <div>
                        <button
                            className="add-button"
                            type="submit"
                            disabled={pristine || submitting}>
                            Add Tool
                        </button>
                        <button 
                            className="clear-button"
                            type="button" 
                            disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>&nbsp;&nbsp;
                        <Link to="/tools">(Back to tools page)</Link>
                    </div>
        
                </form>
            </div>             
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
});

/*
export const mapStateToProps = state => ({
    currentUser:state.auth.currentUser
});
*/

ToolsForm = connect(
    mapStateToProps
  )(ToolsForm)

export default reduxForm({
    form: 'toolsForm',    
    onSubmitFail: (errors, dispatch) => dispatch(focus('toolsform', 'title'))        
})(ToolsForm);
