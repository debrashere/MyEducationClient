import * as types from '../contraints/blogsActionTypes';

const initialState = {
    blog: {},
    blogs: [],
    loading: false,
    error: null
};

export const blogsReducer = (state = initialState, action) => { ; 
    if (action.type === types.CREATE_BLOG) {
        return Object.assign({}, state, {       
            blog: {},
            loading: true,
            error: null
        });
    }      
    else if (action.type === types.CREATE_BLOG_SUCCESS) {
        return Object.assign({}, state, {         
            blog: action.blog || {},
            loading: false,
            error: null
        }); 
    }    
    else if (action.type === types.UPDATE_BLOG) {
        return Object.assign({}, state, {     
            loading: true,
            error: null
        }); 
    }    
    else if (action.type === types.UPDATE_BLOG_SUCCESS) {        
        return Object.assign({}, state, {       
            blog: action.blog || {},
            loading: false,
            error: null
        }); 
    }        
    else if (action.type === types.FETCH_BLOGS) {
        return Object.assign({}, state, {      
            blogs: [],
            loading: true,
            error: null
        });    
    }          
    else if (action.type === types.FETCH_BLOGS_SUCCESS) {         
        return Object.assign({}, state, {     
            blogs: action.blogs || [],
            loading: false,
            error: null
        }); 
    }         
    else if (action.type === types.FETCH_BLOG) {
        return Object.assign({}, state, {           
            blog: {},
            loading: true,
            error: null
        }); 
    }     
    else if (action.type === types.FETCH_BLOG_SUCCESS) {
        return Object.assign({}, state, {      
            blog: action.blog || {},
            loading: false,
            error: null
        });  
    } else if (action.type === types.DELETE_BLOG) {
        return Object.assign({}, state, {                    
            loading: true,
            error: null
        }); 
    }     
    else if (action.type === types.DELETE_BLOG_SUCCESS) {
        return Object.assign({}, state, {      
            blog: {},
            loading: false,
            error: null
        });                    
    } else if (action.type === types.BLOG_ERROR) {      
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        }); 
    }     
        return state;
}
