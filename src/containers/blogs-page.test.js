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
    let props;
    beforeAll(() => {
        for (let i = 1; i < 6 ; i++) {
            blogs.push({
                id: i,
                title: `title-${i}`,
                description: `description-${i}`,
                url: `url${i}`,
                price: i ,
                rating: i,
            });
        }

        currentUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };

        props = {
                currentUser: currentUser,
                blogs: blogs
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
            {type: types.FETCH_BLOGS},
            {blogs: blogs,
              type: types.FETCH_BLOGS_SUCCESS}
        ]

        const store = mockStore({ blogs: [],  auth: {authToken:'token' }});
        return store.dispatch(actions.fetchBlogs()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expected)
          })
    });
});
