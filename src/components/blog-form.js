import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {createBlog, updateBlog, deleteBlog} from '../actions/blogsActions';
import Input from '../components/input';
 
export class BlogsForm extends React.Component {
    // Combine new and existing comments to pass to server for updates
    // to comments collection for this blog
     formatComments(username, content ) {
         let updatedComments = [];
        this.props.blog.comments.forEach(comment => {
            updatedComments.push({author: comment.author, content: comment.content});
        })
        updatedComments.push({author: username, content: content}); 
         return updatedComments;
    }
    hasComments() {
        return (this.props && this.props.blog && this.props.blog.comments)
    }
    onSubmit(values) {       
        // Check if button was clicked to delete all comments and the blog itself
        if (values.type === 'delete') {
            return this.props
            .dispatch(deleteBlog( this.props.blog.id));                        
        }
        else {
            // if comments already exist for this blog then add new comment           
            if (this.props.blog && this.props.blog.toolId) {  
                return this.props
                .dispatch(updateBlog( this.props.blog.id, this.props.blog.toolId,
                    this.formatComments( this.props.currentUser.username, values.content )))                     
            }
            // if this is first blog comment then create the blog and comment
            return this.props
                .dispatch(createBlog(this.props.currentUser.username, 
                    this.props.params.toolId, values.content )) 
            }                                           
    }

    render() {
        const { error, handleSubmit, pristine, submitting, submitSucceeded } = this.props     
        return (    

            <form className="form">                        

                {error && <strong>{error}</strong>}
                 <div className="message-success">
                    {submitSucceeded === true && <strong>Submission successful</strong>}                 
                </div>

                <label htmlFor="content">Add new Comment</label>
                <Field component={Input} type="text" name="content"
                      /> 
  
                <button onClick={handleSubmit(values => 
                    this.onSubmit({ ...values,  type: 'submit'}))}
                    disabled={pristine || submitting}>
                    Submit Comment</button>

                <button onClick={handleSubmit(values => 
                    this.onSubmit({ ...values, type: 'delete' }))}
                    disabled={!this.hasComments()}>
                    Delete all Comments </button>              
        </form>
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
