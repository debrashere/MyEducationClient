import * as types from '../contraints/blogsActionTypes';

const initialState = {
    blog: {},
    blogs: [],
    loading: false,
    error: null
};

export const blogsReducer = (state = initialState, action) => { 
    if (action.type === types.CREATE_BLOG) {
        console.log("REDUCER blogs CREATE_BLOG state", state);
        console.log("REDUCER blogs CREATE_BLOG action", action);
        return Object.assign({}, state, {       
            blog: {},
            loading: true,
            error: null
        });
    }      
    else if (action.type === types.CREATE_BLOG_SUCCESS) {
        console.log("REDUCER blogs CREATE_BLOG_SUCCESS state", state);
        console.log("REDUCER blogs CREATE_BLOG_SUCCESS action", action);
        return Object.assign({}, state, {         
            blog: action.blog || {},
            loading: false,
            error: null
        }); 
    }    
    else if (action.type === types.UPDATE_BLOG) {
        console.log("REDUCER blogs UPDATE_BLOG state", state);
        console.log("REDUCER blogs UPDATE_BLOG action", action);
        return Object.assign({}, state, {     
            loading: true,
            error: null
        }); 
    }    
    else if (action.type === types.UPDATE_BLOG_SUCCESS) {
        console.log("REDUCER blogs UPDATE_BLOG_SUCCESS state", state);
        console.log("REDUCER blogs UPDATE_BLOG_SUCCESS action", action);        
        return Object.assign({}, state, {       
            blog: action.blog || {},
            loading: false,
            error: null
        }); 
    }        
    else if (action.type === types.FETCH_BLOGS) {
        console.log("REDUCER blogs FETCH_BLOGS state", state);
        console.log("REDUCER blogs FETCH_BLOGS action", action);
        return Object.assign({}, state, {      
            blogs: [],
            loading: true,
            error: null
        });    
    }          
    else if (action.type === types.FETCH_BLOGS_SUCCESS) {
        console.log("REDUCER blogs FETCH_BLOGS_SUCCESS state", state);
        console.log("REDUCER blogs FETCH_BLOGS_SUCCESS action", action);         
        return Object.assign({}, state, {     
            blogs: action.blogs || [],
            loading: false,
            error: null
        }); 
    }         
    else if (action.type === types.FETCH_BLOG) {
        console.log("REDUCER blogs FETCH_BLOG state", state);
        console.log("REDUCER blogs FETCH_BLOG action", action);
        return Object.assign({}, state, {           
            blog: {},
            loading: true,
            error: null
        }); 
    }     
    else if (action.type === types.FETCH_BLOG_SUCCESS) {
        console.log("REDUCER blogs FETCH_BLOG_SUCCESS state", state);
        console.log("REDUCER blogs FETCH_BLOG_SUCCESS action", action);
        return Object.assign({}, state, {      
            blog: action.blog || {},
            loading: false,
            error: null
        });  
    } else if (action.type === types.DELETE_BLOG) {
        console.log("REDUCER blogs DELETE_BLOG state", state);
        console.log("REDUCER blogs DELETE_BLOG action", action);
        return Object.assign({}, state, {                    
            loading: true,
            error: null
        }); 
    }     
    else if (action.type === types.DELETE_BLOG_SUCCESS) {
        console.log("REDUCER blogs DELETE_BLOG_SUCCESS state", state);
        console.log("REDUCER blogs DELETE_BLOG_SUCCESS action", action);
        return Object.assign({}, state, {      
            blog: {},
            loading: false,
            error: null
        });                    
    } else if (action.type === types.BLOG_ERROR) {
        console.log("REDUCER blogs BLOG_ERROR state", state);
        console.log("REDUCER blogs BLOG_ERROR action", action);        
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        }); 
    }     
        return state;
}
