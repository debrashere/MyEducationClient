import React from 'react';
import {connect} from 'react-redux';
import BlogsForm from '../components/blog-form';
import Blog from '../components/blog';
import { fetchBlog } from '../actions/blogsActions';
import requiresLogin from '../components/requires-login';
 
/*
    Displays blogging content for a specific Tool
    Input area to allow user to add more commits
*/
class BlogPage extends React.Component { 
    componentDidMount() {  
       this.props.dispatch(fetchBlog(this.props.match.params.id))                 
    }

    render() {
    let   error = '';  
        let params =  { toolId: this.props.match.params.id,
                        blogs: this.props.blogs };        
        return (
        <section  className="wrapper  special">                      
            <BlogsForm params={params} />
            <h2>Blog Comments</h2>
            {error} 
            <Blog toolId={this.props.match.params.id} />
        </section>
        )
    }
}
 
BlogPage.defaultProps = {
    loggedIn: false,
    blogs: []
  };
  
  const mapStateToProps = (state) => ({
      loggedIn: state.auth.currentUser !== null,  
      blogs: state.blogsReducer.blogs
  });
  
  export default requiresLogin()(connect(mapStateToProps)(BlogPage));
    