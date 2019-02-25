import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import * as types from '../contraints/blogsActionTypes';

export const blogError = error => ({
    type: types.BLOG_ERROR,
    error
});

export const fetchBlogsSuccess = (blogs) => ({
    type: types.FETCH_BLOGS_SUCCESS,
    blogs
});

export const updateBlogSuccess = (blog) => ({
    type: types.UPDATE_BLOG_SUCCESS,
    blog
});

export const fetchBlogSuccess = (blog) => {
return ({  
    type: types.FETCH_BLOG_SUCCESS,
    blog
});
}

export const createBlogSuccess = (blog) => ({
    type: types.CREATE_BLOG_SUCCESS,
    blog
});

export const deleteBlogSuccess = () => ({
    type: types.DELETE_BLOG_SUCCESS
});

export const createBlog = (userId, toolId, content, rating) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch({type: types.CREATE_BLOG});
    fetch(`${API_BASE_URL}/blogs`, {
       method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({userId, toolId, content, rating})
    })      
       .then(response => response.json())      
       .then(blog => { 
           dispatch(createBlogSuccess(blog));
       })
       .catch(err => {
           const {code} = err;
           const message =
               code === 401
                   ? 'Unable to create post at this time'
                   : 'Failed to create post, try again';
           dispatch(blogError(message));
           throw new SubmissionError({             
            _error:  message
          }) 
       })
};

export const updateBlog = (id, comments) => (dispatch, getState )=> {
    const authToken = getState().auth.authToken; 
    dispatch({type: types.UPDATE_BLOG});   
    return fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({id, comments})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(blog => {            
            dispatch(updateBlogSuccess(blog)) 
            return Promise.resolve();    })      
        .catch(err => {           
            const {reason, message} = err;
            dispatch(blogError(message));
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                throw new SubmissionError({             
                    _error:  message
                  }) 
            }
        });
};

export const fetchBlogs = () => (dispatch, getState) => { 
    dispatch({type:types.FETCH_BLOGS});
    const authToken = getState().auth.authToken;
    return  (
         fetch(`${API_BASE_URL}/blogs`, {
            method: 'GET',
            headers: {
                // Provide our auth token as credentials
                Authorization: `Bearer ${authToken}`
            }
        })
        .then(response => response.json())
        .then(blogs => {  
            dispatch(fetchBlogsSuccess(blogs)) })
        .catch(err => {
            const {code} = err;
            const message =
                code === 401
                    ? 'Your are not authorize.  Please log in.'
                    : 'Failed to fetch posts tool, try again';
            dispatch(blogError(message));
            throw new SubmissionError({             
                _error:  message
              })         
        })
    )
 };

 export const fetchBlog = (id) => (dispatch, getState) => {
     dispatch({type:types.FETCH_BLOG});
     const authToken = getState().auth.authToken;
     return  (
          fetch(`${API_BASE_URL}/blogs/${id}`, {
             method: 'GET',
             headers: {
                 // Provide our auth token as credentials
                 Authorization: `Bearer ${authToken}`
             }           
         })
         .then(res => normalizeResponseErrors(res))
         .then(res => res.json())
         .then(blogs => {          
             const blog = blogs && blogs.length > 0 ? blogs[0] : {};                 
             dispatch(fetchBlogSuccess(blog));
             return Promise.resolve();                                 
         })         
         .catch(err => {
             const {code} = err;
             const message =
                 code === 401
                     ? 'Your are not authorize.  Please log in.'
                     : 'Failed to fetch posts tool, try again';
             dispatch(blogError(message));
             throw new SubmissionError({             
                _error:  message
              })  
         })
     )
  };

export const deleteBlog = (id, userName) => (dispatch, getState) => {
    dispatch({type:types.DELETE_BLOG});
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: 'DELETE',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify({id, userName})
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(blog => {                   
            dispatch(deleteBlogSuccess());
            return Promise.resolve();                                 
        })         
        .catch(err => {
            const {reason, message, location} = err;
            dispatch(blogError(message));
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }          
        });
};
