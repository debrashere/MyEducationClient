import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ToolsList from '../components/tools-list'
import { fetchTools } from '../actions/toolsActions';
import requiresLogin from '../components/requires-login';


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
    if (this.props.error)  {
        error = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
        );     
    }  

    let params = this.props.currentUser.username;
    return (    
      <section  className="wrapper  special">   
          {error}
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
  error: null
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  tools: state.toolsReducer.tools,
  error: state.toolsReducer.error
});

export default requiresLogin()(connect(mapStateToProps)(ToolsPage));