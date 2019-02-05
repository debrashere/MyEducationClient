import React from 'react';
import {connect} from 'react-redux';
import Blogs from '../components/blogs';
import { fetchBlogs } from '../actions/blogsActions';
import requiresLogin from '../components/requires-login';
 
/*
    Displays all tools which have blogging entries. 
    User able link to specific tool blogs
*/
class BlogsPage extends React.Component { 
    componentDidMount() {    
      this.props.dispatch(fetchBlogs());                
    }

    render() {
    let   error = '';    
        return (
        <section  className="wrapper  special">                       
            <h2>Blogs</h2>
            <div><em>Note: </em> This page only displays Tools that have blog entries.</div>
            {error} 
            <Blogs />
        </section>
        )
    }
}
 
BlogsPage.defaultProps = {
    blogs: []
  };
  
  const mapStateToProps = (state) => {
       return ({
      blogs: state.blogsReducer.consoleblogs
  });
}
  
  export default requiresLogin()(connect(mapStateToProps)(BlogsPage));
    