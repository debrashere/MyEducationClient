import React from 'react';
import {connect} from 'react-redux';
import Blogs from './blogs';
import { fetchBlogs } from '../../actions/blogsActions';
import requiresLogin from '../requires-login';
import {Link} from 'react-router-dom';
 
/*
    Displays all tools which have blogging entries. 
    User able link to specific tool blogs
*/
class BlogsPage extends React.Component { 
    componentDidMount() {    
      this.props.dispatch(fetchBlogs());                
    }

    render() { 
    let loadingMsg;
    let   error = '';   
    if (this.props.loading === true)  {         
      loadingMsg = <div className="message" aria-live="polite">...Loading</div>;  
    }
    else
     loadingMsg = "";  

        return (
        <section  className="wrapper  special">                       
            <h2>Educational Tools with Comments</h2>
            <div>
                <p>
                  This page only displays Tools for which users have entered comments. 
                  See which tools people are commenting about most.  <br />
                  Don't see a Tool you'd like to add comments to, go the&nbsp;
                  <Link to="/tools">Educational Tools</Link>&nbsp; page, find the tool 
                  and click on "View Comments" link.
                 </p>                
            </div>
            {error} 
            {loadingMsg} 
            <Blogs blogs={this.props.blogs} />
        </section>
        )
    }
}
 
BlogsPage.defaultProps = {
    blogs: []
  };
  
  const mapStateToProps = (state) => {
       return ({
      blogs: state.blogsReducer.blogs,
      loading: state.blogsReducer.loading
  });
}
  
  export default requiresLogin()(connect(mapStateToProps)(BlogsPage));
    