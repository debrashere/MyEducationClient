import React from 'react';
import {convertNumberToStars} from '../utils'; 
import './blog.css';
 
export function Blog(props) { 
    let blogComments = [];
    let blogTitle = '';
    let ratingsSummary = [];       
   
    let formatRatingsSummary = () => {
        let formatted = [];
        ratingsSummary.push({rating: props.blog.toolId.rating, count: 1}); 
         props.blog.comments.forEach(function (comment, i) {           
           let thisRating = ratingsSummary.filter( rating => rating.rating === comment.rating);
     
           if (!thisRating || thisRating.length === 0)
                ratingsSummary.push({rating: comment.rating, count: 1});
           else {
                thisRating[0].count = thisRating[0].count + 1;
            }           
        })                
        ratingsSummary.forEach(function (rating, i) {                      
            formatted.push(<span className='item' key={i}>{convertNumberToStars(rating.rating)}  {rating.count}</span>);                                                                             
        });     
            return formatted;
     }

    // render the Tool title and rating
    if (props.blog && props.blog.comments ) {
        blogTitle = 
        <div>{props.blog.toolId.title}  
             {formatRatingsSummary()}
        </div> 

        // render each comment displaying the author, comment and rating
        props.blog.comments.forEach(function (comment, i) {
            blogComments.push(            
                <div className='flex-item item-box' key={i}> 
                    <div className='item comment-author'>{comment.author}</div>             
                    <div className='item'>{comment.content}</div>    
                    <div className='item'>{convertNumberToStars(comment.rating)}</div>                                                        
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
