import React from 'react';
import {connect} from 'react-redux';
import Blogs from '../components/blogs';
import { fetchBlogs } from '../actions/blogsActions';
 
class BlogsPage extends React.Component { 
    componentDidMount() {    
      this.props.dispatch(fetchBlogs());                
    }

    render() {
    let   error = '';  
    /*
        let params =  { toolId: this.props.match.params.id,
                        blogs: this.props.blogs };   
                        */     
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
    loggedIn: false,
    blogs: []
  };
  
  const mapStateToProps = (state) => {
       return ({
      loggedIn: state.auth.currentUser !== null,  
      blogs: state.blogsReducer.consoleblogs
  });
}
  
  export default connect(mapStateToProps)(BlogsPage);
    