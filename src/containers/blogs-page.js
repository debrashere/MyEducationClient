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
    let loadingMsg;
    let   error = '';   
    if (this.props.loading === true)  {         
      loadingMsg = <div className="message" aria-live="polite">...Loading</div>;  
    }
    else
     loadingMsg = "";  

        return (
        <section  className="wrapper  special">                       
            <h2>Educational Tools with sComments</h2>
            <div><em>Note: </em> This page only displays Tools that have blog entries.</div>
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
    