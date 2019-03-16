import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ToolsList from './tools-list'
import { fetchTools } from '../../actions/toolsActions';
import requiresLogin from '../requires-login'; 
 
/*
  List of existing tools
  Link to add a new tool
*/
class ToolsPage extends React.Component {

  componentWillMount() {   
    this.props.dispatch(fetchTools());
  }

  render() {
    let error; 
    let loadingMsg;
    if (this.props.error)  {
        error = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
        );     
    }

    if (this.props.loading === true)  {         
      loadingMsg = <div className="message" aria-live="polite">...Loading</div>;  
    }
    else
     loadingMsg = "";  
    

    let params = this.props.currentUser.username;
    return (    
      <section  className="wrapper  special">   
          {error}
          {loadingMsg}
          <h2>Educational Tools <span>        
              <Link to={`toolsform/${params}`}> (Add Tools)</Link>
            </span></h2>
          <ToolsList tools={this.props.tools} />
      </section>
    )
  }
}
 
ToolsPage.defaultProps = {
  currentUser: null,
  loggedIn: false,
  tools: [],
  error: null,
  loading: true
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  tools: state.toolsReducer.tools,
  error: state.toolsReducer.error,
  loading: state.toolsReducer.loading
});

export default requiresLogin()(connect(mapStateToProps)(ToolsPage));