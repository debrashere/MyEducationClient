import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, focus} from 'redux-form';
import {updateTool} from '../actions/toolsActions';
import Input from '../components/input';
import {required, nonEmpty, isTrimmed} from '../validators';

export class ToolsEditForm extends React.Component { 
    
    componentDidMount() {
        // display the form with the current tools data
        if (this.props && this.props.params.toolId  && this.props.params.tools) { 
            let selectedTool =  this.props.tools.filter( tool => tool.id === this.props.params.toolId);
            this.props.destroy();     
            this.props.initialize({
                title: selectedTool[0].title,
                url: selectedTool[0].url,
                description: selectedTool[0].description,
                rating: selectedTool[0].rating,
                price: selectedTool[0].price
            });             
        }            
    }
    
    onSubmit(values) {
        // Submit the updates
        return this.props
            .dispatch(updateTool( this.props.params.toolId, values.title,
                values.url, values.description, values.price,
                values.rating))                                 
    }


    render() {        
        const { error, handleSubmit, pristine, reset, submitting, submitSucceeded } = this.props          
        return (
            <form className="form" onSubmit={handleSubmit(values => this.onSubmit(values) )}>                            

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
        )
    }
}

const mapStateToProps = state => ({
    tools: state.toolsReducer.tools
});

ToolsEditForm = connect(
    mapStateToProps
  )(ToolsEditForm)
   
export default reduxForm({
    form: 'toolsForm',     
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('toolsform', 'title'))
})(ToolsEditForm);
