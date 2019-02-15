import React from 'react';
import {Link} from 'react-router-dom';

export function Blogs(props) {    
    let blogs;
    // Render list of tools that have blogs. 
    // Display the tool title, count of blog entries and link to view the blogs
    if (props && props.blogs && props.blogs.length > 0) {  
        blogs = props.blogs.map(function(blog, index) {            
        return (
            <div className='flex-item item-box' key={index}>            
            <div className='blog' key={index}>     
                <span className='item'>{blog.toolId.title}</span>              
                <span className='item'>(Blog has {blog.comments.length} comments) </span>
                <span className='item'><Link to={`blog/${blog.toolId._id}`}>View Blog</Link></span>              
            </div>                    
        </div>);
        }); 
    }         
    
    return (
        <div className='flex-container'>                              
                {blogs}        
        </div>) 
}

export default (Blogs);
