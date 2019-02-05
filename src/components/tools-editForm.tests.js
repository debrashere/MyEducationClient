import React from 'react';
import {shallow, mount, mockClear} from 'enzyme';

//imports the unconnected component
import { ToolsEditForm } from './tools-editForm';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk' 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<ToolsEditForm/>', () => { 
    let tools = [];
    let tool = {}
    let currentUser;
    let props;
    beforeAll(() => {
        for (let i = 1; i < 6 ; i++) {
            tools.push({
                id: i,
                title: `title-${i}`,
                description: `description-${i}`,
                url: `url${i}`,
                price: i ,
                rating: i
            });
        };

        tool = {
            id: 1,
            title: `title-`,
            description: `description`,
            url: `url`,
            price: 1 ,
            rating: 1
        };

        currentUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };


        const store = mockStore({ tools: [],  auth: {authToken:'token' }});

        props = {
                currentUser: currentUser,             
                tools: tools,            
                store
            };
    });

    it('Renders without crashing', () => {
        shallow(<ToolsEditForm  {...props} />);
    });

    it('Renders the expected text', () => {
        const wrapper = shallow(<ToolsEditForm {...props}  />);  
        expect(wrapper.contains('title-1')).toEqual(true);      
    });       
});
