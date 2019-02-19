import React from 'react';
import {convertNumberToStars} from '../utils'; 
import './blog.css';
 
export function Blog(props) { 
    let blogComments = [];
    let blogTitle = '';
    
    // render the Tool title and rating
    if (props.blog && props.blog.comments ) {
        blogTitle = 
        <div>{props.blog.toolId.title}  
            <span className='item'>{convertNumberToStars(props.blog.toolId.rating)}</span> 
        </div> 

        // render each comment displaying the author and the comment
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

export default (Blog);
