import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import * as types from '../contraints/toolsActionTypes';
import * as actions from '../actions/toolsActions';
import {ToolsForm} from '../components/tools-form';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk' 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<AddForm />', () => {
    let currentUser;
    let tools = [];
    let tool = {}
    let props;
    beforeAll(() => {
        for (let i = 1; i < 6 ; i++) {
            tools.push({
                id: i,
                title: `title-${i}`,
                description: `description-${i}`,
                url: `url${i}`,
                price: i ,
                rating: i,
            });
        }
        tool = {
            id: 1,
            title: `title`,
            description: `description`,
            url: `url`,
            price: 1,
            rating: 1,
        }
        currentUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };

        const store = mockStore({ tool: {},  auth: {authToken:'token' }});

        props = {
                currentUser: currentUser,
                tools: tools,
                store
            };
    })

    it('Renders without crashing', () => {
     
        shallow(<ToolsForm {...props} />);
    });
 
    /*
    it('Should dispatch createToolSuccess', () => {
       
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return tool;
                }
            })
        );

        const expected = [
            {type: types.CREATE_TOOL},
            {tool: tool,
              type: types.CREATE_TOOL_SUCCESS}
        ]

        const store = mockStore({ tool: {},  auth: {authToken:'token' }});
        return store.dispatch(actions.createTool(currentUser.username, tool.url, 
            tool.description, tool.price, tool.rating)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expected)
          })    
    }); 
*/    
}); 