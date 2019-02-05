import React from 'react';
import {connect} from 'react-redux';
import ToolsEditForm  from '../components/tools-editForm';
import { fetchTool } from '../actions/toolsActions';
import requiresLogin from '../components/requires-login';

/*
    Edit Tool information
*/
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
        tools: []
    };
        
    const mapStateToProps = (state) => ({
        tools: state.toolsReducer.tools
    });
    
export default requiresLogin()(connect(mapStateToProps)(EditToolsPage));
    