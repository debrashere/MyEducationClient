import React from 'react';
import {shallow, mount, mockClear} from 'enzyme';

//imports the unconnected components
import { ToolsList } from './tools-list';

//imports the unconnected actions
import {fetchToolsSuccess} from '../actions/toolsActions';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk' 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<ToolsList/>', () => { 
    let tools = [];
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
        shallow(<ToolsList  {...props} />);
    });

    it('Renders the expected text', () => {
        const wrapper = shallow(<ToolsList {...props}  />);
        //expect(wrapper.text()).toContain(wrapper.text('title-1'))    
        expect(wrapper.contains('title-1')).toEqual(true);      
    });       
});
