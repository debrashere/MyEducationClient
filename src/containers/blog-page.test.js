import React from 'react';
import {shallow} from 'enzyme';
import * as types from '../contraints/blogsActionTypes';
import * as actions from '../actions/blogsActions';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    let blogs = [];
    let currentUser;
    let thisComments = [];
    let props;
    let blog;
    beforeAll(() => {
        
        for (let i = 1; i < 2 ; i++) {
            thisComments.push({         
                authorId: `authorId-${i}`,
                content: `content-${i}`
            })
        }   

        for (let i = 1; i < 2 ; i++) {
            blogs.push({
                id: i,
                toolId: {_id: i},
                comments: thisComments
                })
        }        

        blog = {
            id: 1,
            toolId: {_id: 1},
            comments: [{authorId: 'authorId-1', content: 'content-1'}]
        }

        currentUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };

        props = {
                currentUser: currentUser,
                blog: blog
            };
    })
 
     it('Should dispatch fetchBlogsSuccess', () => {
       
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return blogs;
                }
            })
        );

        const expected = [
            {type: types.FETCH_BLOG},
            {blog: blog,
              type: types.FETCH_BLOG_SUCCESS}
        ]

        const store = mockStore({ blog: {},  auth: {authToken:'token' }});
        return store.dispatch(actions.fetchBlog()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expected)
          })
    });
});
