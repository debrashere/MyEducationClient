import {fetchBlogsSuccess,  fetchBlogSuccess, createBlogSuccess,updateBlogSuccess} from './blogsActions';
import {FETCH_BLOGS_SUCCESS,  FETCH_BLOG_SUCCESS, CREATE_BLOG_SUCCESS, UPDATE_BLOG_SUCCESS} from '../contraints/blogsActionTypes';

describe('BlogsActions', () => {
     // Set up some dummy data
     let blogs = [];
     let blog = {};
 
     beforeAll(() => {
         for (let i = 1; i < 6 ; i++) {
            blogs.push({
                 id: i,
                blogId: `blogId-${i}`,              
                comments: [{
                  author: `author-${i}`,  
                  content: `content-${i}`,
                  rating: i }]    
             });
         };
     })

     blog ={
        id: '1',
        blogId: '`blogId',              
        comments: [{
        author: 'autho',  
        content: 'content',
        rating: 3 }]    
        }
 
 
    it('Should return the action for fetchBlogSuccess', () => {       
        const action = fetchBlogSuccess(blog);
        expect(action.type).toEqual(FETCH_BLOG_SUCCESS);
        expect(action.blog).toEqual(blog);
        });

    it('Should return the action for fetchBlogs', () => {
        const action = fetchBlogsSuccess(blogs);
        expect(action.type).toEqual(FETCH_BLOGS_SUCCESS);
        expect(action.blogs).toEqual(blogs);
        }) 

    it('Should return the action for createBlogSuccess', () => {
        const action = createBlogSuccess(blog);
        expect(action.type).toEqual(CREATE_BLOG_SUCCESS);
        expect(action.blog).toEqual(blog);
        })  

    it('Should return the action for updateBlogSuccess', () => {
        const action = updateBlogSuccess(blog);
        expect(action.type).toEqual(UPDATE_BLOG_SUCCESS);
        expect(action.blog).toEqual(blog);
        })  
});
