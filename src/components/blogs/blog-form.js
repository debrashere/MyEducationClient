import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {createBlog, updateBlog, deleteBlog} from '../../actions/blogsActions';
import Input from '../input';
import {required,  isTrimmed,  isNumeric, isRatingValid, nonEmpty, validateField} from '../../validators';

let errors = [];
let validationErrors;
let validationErrorMessage;

export class BlogsForm extends React.Component {  
     
    // Combine new and existing comments to pass to server for updates
    // to comments collection for this blog
     formatComments(username, content, rating ) {
        let updatedComments = [];
        if(this.props.blog.comments) {
            this.props.blog.comments.forEach(comment => {
            updatedComments.push({author: comment.author, content: comment.content, rating: comment.rating});
            })
        }
        updatedComments.push({author: username, content: content, rating: rating}); 
         return updatedComments;
    }

    // Only enable "Delete my Comments" if comments exist for the logged in user
    hasComments() {
        let hasComments = false;
        if (this.props && this.props.blog && this.props.blog.comments) {           
            const loggedInUserComments =  this.props.blog.comments
                 .filter(comment => comment.author === this.props.currentUser.username);
            hasComments = loggedInUserComments && loggedInUserComments.length > 0
        }
        return hasComments;
             
    }

    // Delete my Comments button
    // only delete comments belonging to the logged in user
    removeCommentsForThisUser() {
        const commentsToKeep =  this.props.blog.comments.filter( comment => comment.author !== this.props.currentUser.username);
        return commentsToKeep;
    }

    
    // executed when adding blog comments after form successfully updates
    submit(values) {    
        // if comments already exist for this blog then add new comment                
        if (this.props.blog && this.props.blog.toolId) { 
            const comments = 
                this.formatComments( this.props.currentUser.username, values.content , values.rating); 
            return this.props.dispatch(updateBlog( this.props.blog.id, comments))               
        }
        // if this is first blog comment then create the blog and comment 
        return this.props
            .dispatch(createBlog(this.props.currentUser.username, 
                this.props.params.toolId, values.content, values.rating))                                                   
    }

    onSubmit(values) { 
        // perform validation before submitting login
        // Validation done here because it's optional depending if "delete my comments"
        // is clicked which does not requrire validation       
        validationErrors = ''; 
        validationErrorMessage = '';        
        errors = [];
        errors.push(validateField('Comment', values.content, [required, nonEmpty, isTrimmed]));
        errors.push(validateField('Rating', values.rating, [required, isTrimmed, isNumeric, isRatingValid]));                  
        if (errors.length > 0) {
            for (let index=0; index< errors.length; index++) {           
                if (errors[index].length > 0) {
                    validationErrors += ` ${errors[index][0]}  `
                }          
            }
            this.props.initialize({
                username: values.content,
                password: values.rating
            });
            // If validation errors found do not submit the form
            if (validationErrors.length > 0) {          
                return;
            }                  
        }
        return this.submit(values);
    }
    /*
        Demo user does not require form validation
    */
    onDeleteMyComments() { 
        const commentsToKeep = this.removeCommentsForThisUser();
        // if no comments exist after logged in user comments are removed
        // then delete the blog
        if (!commentsToKeep || commentsToKeep.length === 0) {
            return this.props.dispatch(deleteBlog(this.props.blog.id))
        }
        // Update Blog with logged in user comments deleted
        return this.props.dispatch(updateBlog(this.props.blog.id, commentsToKeep));                     
    }      

    render() {
        const { error, handleSubmit, pristine, submitting, submitSucceeded } = this.props     
        if (validationErrors  && validationErrors.length > 0) {
            validationErrorMessage = (
                <div className="form-error" aria-live="polite">
                    {validationErrors}
                </div>
            );            
        }
        return (    
            <div> 
                <h2>Educational Tool Comments</h2>    
                <form className="form">                        

                    {error && <strong>{error}</strong>}
                    {validationErrorMessage && <strong>{validationErrorMessage}</strong>}
                    <div className="message-success">
                        {(submitSucceeded === true && !validationErrorMessage) && <strong>Submission successful</strong>}                 
                    </div>

                    <label htmlFor="content">Comment</label>
                    <Field component={Input} 
                        type="text" 
                        name="content"                              
                        /> 
                    
                    <label htmlFor="rating">Rating</label>
                    <Field component={Input} 
                        type="text" 
                        name="rating" 
                        className="input-rating"                   
                         />
    
                    <button onClick={handleSubmit(values => 
                        this.onSubmit({ ...values}))}
                        disabled={pristine || submitting}>
                        Add new Comment</button>

                    <button onClick={handleSubmit(values => 
                        this.onDeleteMyComments({ ...values }))}                        
                        disabled={!this.hasComments()}>
                        Delete My Comments </button>              
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    blog: state.blogsReducer.blog
});

BlogsForm = connect(  mapStateToProps  )(BlogsForm)
export default reduxForm({
    form: 'blogForm',    
    onSubmitFail: (errors, dispatch) => dispatch(focus('blogForm', 'content'))  
})(BlogsForm);
