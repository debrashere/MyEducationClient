import React from 'react';
import {connect} from 'react-redux';
import ToolsEditForm  from '../components/tools-editForm';
import { fetchTool } from '../actions/toolsActions';

class EditToolsPage extends React.Component { 
    componentDidMount() {  
        this.props.dispatch(fetchTool(this.props.match.params.toolId))                 
    }

    render() {
    let   error = '';  
        let params =  { toolId: this.props.match.params.toolId,
                        tools: this.props.tools };        
        return (
            <section  className="wrapper  special">   
            <h2>Edit Tool</h2>
                {error}                   
                <ToolsEditForm params={params} />                        
            </section>
            )
        }
    }
     
    EditToolsPage.defaultProps = {
        loggedIn: false,
        tools: []
    };
        
    const mapStateToProps = (state) => ({
        loggedIn: state.auth.currentUser !== null,  
        tools: state.toolsReducer.tools
    });
    
export default connect(mapStateToProps)(EditToolsPage);
    