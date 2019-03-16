import React from 'react';
import {connect} from 'react-redux';
import BlogsForm from './blog-form';
import Blog from './blog';
import { fetchBlog } from '../../actions/blogsActions';
import requiresLogin from '../requires-login';

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
                            blog: this.props.blog };                             
        let blogParams = { blog: this.props.blog,
                        currentUser: this.props.currentUser };         
        return (
        <section  className="wrapper  special">                      
            <BlogsForm params={params} />
            <h2>Comments</h2>
            {error}      
              <Blog {...blogParams} />
        </section>                        
        )
    }
}

  const mapStateToProps = (state) => ({
      loggedIn: state.auth.currentUser !== null, 
      currentUser:  state.auth.currentUser, 
      blog: state.blogsReducer.blog
  });
  
  export default requiresLogin()(connect(mapStateToProps)(BlogPage));
    