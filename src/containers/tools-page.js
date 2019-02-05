import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ToolsList from '../components/tools-list'
import { fetchTools } from '../actions/toolsActions';
import requiresLogin from '../components/requires-login';

/*
  List of existing tools
  Link to add a new tool
*/
class ToolsPage extends React.Component { 
  componentDidMount() {   
    this.props.dispatch(fetchTools()) 
    .catch(err => {   
      if (!this.props.loggedIn) { 
        return <Redirect to="/login" />;
      }        
    })    
  }

  render() {
    let error;
    if (!this.props.loggedIn)  {
        error = (
            <div className="form-error" aria-live="polite">
                You must login or register to access this app.
            </div>
        );
        return <Redirect to="/login" />;
    }  
    let params = this.props.currentUser.username;
    return (    
      <section  className="wrapper  special">   
          {error}
          <h2>Educational Tools <span>        
              <Link to={`toolsform/${params}`}> (Add Tools)</Link>
            </span></h2>
          <ToolsList />
      </section>
    )
  }
}
 
ToolsPage.defaultProps = {
  currentUser: null,
  loggedIn: false,
  tools: []
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  tools: state.toolsReducer.tools
});

export default requiresLogin()(connect(mapStateToProps)(ToolsPage));