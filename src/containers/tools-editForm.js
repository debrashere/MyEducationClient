import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {fetchTool, updateTool} from '../actions/toolsActions';
import Input from '../components/input';
import requiresLogin from '../components/requires-login';
import {required, nonEmpty, isTrimmed} from '../validators';

export class ToolsEditForm extends React.Component { 
    
    componentWillMount() {  
          this.props.dispatch(fetchTool(this.props.match.params.id))
         .then(tool => {
            if (this.props  && this.props.tool) { 
                this.props.initialize({
                    title: this.props.tool.title,
                    url: this.props.tool.url,
                    description: this.props.tool.description,
                    rating: this.props.tool.rating,
                    price: this.props.tool.price
                });
            }
         })                     
     }
       
    onSubmit(values) {
        // Submit the updates              
        return this.props
            .dispatch(updateTool( this.props.tool.id, values.title,
                values.url, values.description, values.price,
                values.rating))                                 
    }

    render() {        
        const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props          
        return (
            <div className="edit-form" > 
                <h2>  Edit Tool</h2>  
                <form className="form edit-form" onSubmit={handleSubmit(values => this.onSubmit(values) )}>                            

                    {error && <strong>{error}</strong>}
                    <div className="message-success">
                        {submitSucceeded === true && <strong>Submission successful</strong>}                 
                    </div>

                    <label htmlFor="title">Title</label>
                    <Field
                        component={Input}
                        type="text"
                        name="title"
                        validate={[required, nonEmpty, isTrimmed]}
                    />
                
                    <label htmlFor="description">Description</label>
                    <Field component={Input} type="text" name="description"/>

                    <label htmlFor="url">Url</label>
                    <Field
                        component={Input}
                        type="text"
                        name="url"
                        validate={[required, isTrimmed]}
                    />

                    <label htmlFor="price">Price</label>
                    <Field component={Input} type="text" name="price" />

                    <label htmlFor="rating">Rating</label>
                    <Field component={Input} type="text" name="rating" />
                    
                    <button
                        type="submit"
                        disabled={pristine || submitting}>
                        Update Tool
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </button>                
                </form>
            </div>                
        )
    }
}

const mapStateToProps = state =>  ({
    tool: state.toolsReducer.tool
});

ToolsEditForm = connect(
    mapStateToProps
  )(ToolsEditForm)
   
export default requiresLogin()(reduxForm({
    form: 'toolsForm',     
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('toolsform', 'title'))
})(ToolsEditForm));
