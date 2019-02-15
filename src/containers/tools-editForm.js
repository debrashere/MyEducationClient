import React from 'react';
import {connect} from 'react-redux';
import ToolsEditForm  from '../components/tools-editForm';
import { fetchTool } from '../actions/toolsActions';
import requiresLogin from '../components/requires-login';

/*
    Edit Tool information
*/
class EditToolsPage extends React.Component { 
   
    componentWillMount() {  
       // console.log("CONTAINER  tools-editForm componentWillMount props", this.props);
        this.props.dispatch(fetchTool(this.props.match.params.id));                      
    }

       
    componentDidMount() {  
        //console.log("CONTAINER  tools-editForm componentDidMount props", this.props);
       this.props.dispatch(fetchTool(this.props.match.params.id));                      
    }
   
    render() {
    let   error = '';  
    //console.log("CONTAINER  tools-editForm render() props", this.props);
                              
        return (
            <section  className="wrapper  special">   
            <h2>Edit Tool</h2>
                {error}                   
                <ToolsEditForm />                        
            </section>
            )
        }
    }
        
    const mapStateToProps = (state) => ({
        tool: state.toolsReducer.tool        
    });

/*
    const mapDispatchToProps = dispatch => {
        return {
          // explicitly forwarding arguments
          onClick: event => dispatch(trackClick(event)),
      
          // implicitly forwarding arguments
          onReceiveImpressions: (...impressions) =>
            dispatch(trackImpressions(impressions))
        }
      }
*/

export default requiresLogin()(connect(mapStateToProps)(EditToolsPage));
    

//export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer));  