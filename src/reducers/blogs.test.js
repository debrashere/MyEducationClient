import {blogsReducer} from './blogs';
import * as types from '../contraints/blogsActionTypes';

describe('blogsReducer', () => {
    // Set up some dummy data
    let blog = {};
    let blogs = [];
    let fetchBlogAction;
    let fetchBlogActionResult;
    let fetchBlogResult;
    let fetchBlogSuccessAction;
    let fetchBlogSuccessActionResult;

    let fetchBlogsAction;
    let fetchBlogsActionResult;
    let fetchBlogsSuccessAction;
    let fetchBlogsSuccessActionResult;

    let createBlogAction;
    let createBlogActionResult;
    let createBlogSuccessAction;
    let createBlogSuccessActionResult;

    let updateBlogAction;
    let updateBlogActionResult;
    let updateBlogSuccessAction;
    let updateBlogSuccessActionResult;

    let blogErrorAction;
    let blogErrorResult;
    beforeAll(() => {
        for (let i = 1; i < 6 ; i++) {
           blogs.push({
                id: i,
               toolId: `toolId-${i}`,              
               comments: [{
                 author: `author-${i}`,  
                 content: `content-${i}`}]    
            });
        };
    })

    blog = { 
        id: '1',
        toolId: 'toolId',              
        comments: [{
        author: 'author',  
        content: 'content'}]
    };

    fetchBlogAction = { 
        type: types.FETCH_BLOG
    }
    fetchBlogActionResult = { 
        blog: {},
        blogs: [],
        loading: true,
        error: null
    }
    fetchBlogSuccessAction = { 
        type: types.FETCH_BLOG_SUCCESS,
        blog: blog
    }
    fetchBlogSuccessActionResult = { 
        blog: blog,
        blogs: [],
        loading: false,
        error: null
    }

    fetchBlogsAction = { 
        type: types.FETCH_BLOGS
    }
    fetchBlogsActionResult = { 
        blog: {},
        blogs: [],
        loading: true,
        error: null
    }
    fetchBlogsSuccessAction = { 
        type: types.FETCH_BLOGS_SUCCESS,
        blogs: blogs
    }
    fetchBlogsSuccessActionResult = { 
        blog: {},
        blogs: blogs,
        loading: false,
        error: null
    }


    createBlogAction = { 
        type: types.CREATE_BLOG
    }
    createBlogActionResult = { 
        blog: {},
        blogs: [],
        loading: true,
        error: null
    }
    createBlogSuccessAction = { 
        type: types.CREATE_BLOG_SUCCESS,
        blog: blog
    }
    createBlogSuccessActionResult = { 
        blog: blog,
        blogs: [],
        loading: false,
        error: null
    }


    updateBlogAction = { 
        type: types.UPDATE_BLOG
    }
    updateBlogActionResult = { 
        blog: {},
        blogs: [],
        loading: true,
        error: null
    }
    updateBlogSuccessAction = { 
        type: types.UPDATE_BLOG_SUCCESS,
        blog: blog
    }
    updateBlogSuccessActionResult = { 
        blog: blog,
        blogs: [],
        loading: false,
        error: null
    }
 
    blogErrorAction = {
        type: types.BLOG_ERROR,
        error: 'error' 
    }
    blogErrorResult =  {
        blog: {},
        blogs: [],
        error: 'error', 
        loading: false
    }

    const initialState = {
        blog: {},
        blogs: [],
        loading: false,
        error: null
    };

    it('Should set the initial state when nothing is passed in', () => {
        let state = blogsReducer(undefined,  {type: '__UNKNOWN'});         
        expect(state).toEqual(initialState) ;   
    });
 
    it('Should set the state for FETCH_BLOG', () => {
        let state = blogsReducer(initialState, fetchBlogAction );         
        expect(state).toEqual(fetchBlogActionResult) ;   
    });
 
    it('Should set the state for FETCH_BLOG_SUCCESS', () => {
        let state = blogsReducer(fetchBlogResult, fetchBlogSuccessAction );         
        expect(state).toEqual(fetchBlogSuccessActionResult) ;   
    }); 

    it('Should set the state for FETCH_BLOGS', () => {
        let state = blogsReducer(initialState, fetchBlogsAction );         
        expect(state).toEqual(fetchBlogsActionResult) ;   
    });
 
    it('Should set the state for FETCH_BLOGS_SUCCESS', () => {
        let state = blogsReducer(fetchBlogsActionResult, fetchBlogsSuccessAction );         
        expect(state).toEqual(fetchBlogsSuccessActionResult) ;   
    }); 

    it('Should set the state for CREATE_BLOG', () => {
        let state = blogsReducer(initialState, createBlogAction );         
        expect(state).toEqual(createBlogActionResult) ;   
    });
 
    it('Should set the state for CREATE_BLOG_SUCCESS', () => {
        let state = blogsReducer(createBlogActionResult, createBlogSuccessAction);         
        expect(state).toEqual(createBlogSuccessActionResult) ;   
    }); 
    
    it('Should set the state for UPDATE_BLOG', () => {
        let state = blogsReducer(initialState, updateBlogAction );         
        expect(state).toEqual(updateBlogActionResult) ;   
    });
 
    it('Should set the state for UPDATE_BLOG_SUCCESS', () => {
        let state = blogsReducer(updateBlogActionResult, updateBlogSuccessAction);         
        expect(state).toEqual(updateBlogSuccessActionResult) ;   
    });  
 
    it('Should set the state for action BLOG_ERROR', () => {
        let state = blogsReducer(initialState,  blogErrorAction);         
        expect(state).toEqual(blogErrorResult) ;   
    });            
})  
