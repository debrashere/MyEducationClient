import React from 'react';
import {shallow, mount} from 'enzyme';
import {ToolsList}  from './tools-list';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk' 
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<ToolsList />', () => {
    let thisUser;
    let thisTools = [];
    let props;
    let store;
    let values;
    let tool;
    beforeAll(() => {
        for (let i = 0; i < 6 ; i++) {
            thisTools.push({
                id: i,
                toolId: i,
                title: `title-${i}`,
                description: `description-${i}`,
                url: `url${i}`,
                price: i ,
                rating: i,
            });
        }
        tool = {
            id: 1,
            toolId: 1,
            title: `title`,
            description: `description`,
            url: `url`,
            price: 1,
            rating: 1,
        }
        thisUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };

        store = mockStore({ auth: {authToken:'token' }}); 
        //store = mockStore({ currentUser:  thisUser}); 
     
       values = { 
           title: 'title',
            url: 'www.google.com', 
            description: 'description', 
            price: '1.00',
            rating: '3' };

    let handleSubmit = fn => fn(values);
    props = { 
        actions:{ fetchTools : () => { return Promise.resolve(); }},
        handleSubmit,
        error: null,        
        pristine: true,
        reset: false, 
        submitting: false,
        submitSucceeded: false,
        currentUser:  thisUser, 
        tools: thisTools,  
        store
        };
    })
 
 // Mock the async creatTool action
const mockFetchToolsAction = {
    type: 'FETCH_TOOLS'
};
jest.mock('../actions/toolsActions', () => Object.assign({},
    require.requireActual('../actions/toolsActions'),
    {
        fetchToolsList: jest.fn().mockImplementation(() => {
            return mockFetchToolsAction;
        })
    }
));

   it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<ToolsList {...props} dispatch={dispatch} />);
    });


    it('Renders rating number converted to stars', () => {     
        const wrapper = shallow(<ToolsList {...props} />);       
        // Each number rating is converted to 5 stars 
        expect(wrapper.find('i').getElements('').length).toEqual(thisTools.length * 5);
    });
 
    it('Renders price of 0.00 to display as "Free"', () => {     
        const wrapper = shallow(<ToolsList {...props} />);        
        const prices = wrapper.find('strong').parent('div').getElements();
        for(let index=0; index < thisTools.length ; index++) {                     
            if (thisTools[index].price === 0) {
                expect(prices[index].props.children[2]).toEqual('Free');
            }
            else
                expect(prices[index].props.children[2]).toEqual(`$${thisTools[index].price}`);                    
         }               
    });
  
});