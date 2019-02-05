import React from 'react';
import {connect} from 'react-redux';
import {convertNumberToStars} from '../utils'; 
import './blog.css';
 
export function Blog(props) { 
    let blogComments = [];
    let blogTitle = '';
    if (props.blog && props.blog.comments ) {
        blogTitle = 
        <div>{props.blog.toolId.title}  
            <span className='item'>{convertNumberToStars(props.blog.toolId.rating)}</span> 
        </div> 

        props.blog.comments.forEach(function (comment, i) {
            blogComments.push(            
                <div className='flex-item item-box' key={i}> 
                    <div className='item comment-author'>{comment.author}</div>             
                    <div className='item'>{comment.content}</div>                                                           
                </div>)
        });                  
    }    

    return (
        <div>
            {blogTitle}  
            <div className='flex-container'>                                            
                {blogComments}        
            </div>
        </div>) 
}

const mapStateToProps = state => ({   
    blog: state.blogsReducer.blog
});

export default connect(mapStateToProps)(Blog);
