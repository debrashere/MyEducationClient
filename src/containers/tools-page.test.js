import React from 'react';
import {shallow, mount} from 'enzyme';
import ToolsPage from './tools-page';
import * as types from '../contraints/toolsActionTypes';
import * as actions from '../actions/toolsActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
   
describe('<ToolsPage />', () => {
    let tools = [];
    let currentUser;
    let loggedIn;
    let props;
    let store;
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

        currentUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };

        loggedIn  = false;

        store = mockStore({ tools: [],  auth: {authToken:'token' }});

        props = {
                currentUser: currentUser,
                tools: tools,
                loggedIn: loggedIn,
                store
            };
    })

    it('Renders without crashing', () => {
        shallow(<ToolsPage {...props} />);
    });

    it('Should dispatch fetchToolsSuccess', () => {
       
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return tools;
                }
            })
        );

        const expected = [
            {type: types.FETCH_TOOLS},
            {tools: tools,
              type: types.FETCH_TOOLS_SUCCESS}
        ]

        const store = mockStore({ tools: [],  auth: {authToken:'token' }});
        return store.dispatch(actions.fetchTools()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expected)
          })
    });
});
