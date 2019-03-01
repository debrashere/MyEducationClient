import React from 'react';
import {shallow, mount} from 'enzyme';
import {Blogs}  from './blogs';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk' 
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<Blogs />', () => {
    let thisUser;
    let thisBlogs = [];
    let props;
    let store;
    let blog;
    let thisComments = [];
    beforeAll(() => {

        for (let i = 0; i < 3 ; i++) {
            thisComments.push({
                 author: `author-${i}`,
                content: `content-${i}`, 
            });
        }

        for (let i = 0; i < 6 ; i++) {
            thisBlogs.push({
                id: i,
                toolId: {_id: i},
                comments: thisComments
            });
        }

        blog = {
            id: 1,
            toolId: {_id: 2},
            comments: thisComments
        }

        thisUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };

        store = mockStore({ auth: {authToken:'token' }});     

    const initialState = {
        blog: {},
        blogs: [],
        loading: false,
        error: null
    };
    
    props = { 
        error: null,         
        currentUser:  thisUser, 
        blogs: thisBlogs,  
        store
        };
    })

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Blogs {...props} />);
    });
    
    it('Renders link to view comment', () => {     
        const wrapper = shallow(<Blogs {...props} />);        
        const links = wrapper.find('Link').getElements();
      
        for(let index=0; index < thisBlogs.length ; index++) { 
            expect(links[index].props.to).toEqual(`comment/${thisBlogs[index].toolId._id}`);                                        
         }           
    });  
});