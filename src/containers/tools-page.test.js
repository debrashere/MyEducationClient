import * as types from '../contraints/toolsActionTypes';
import * as actions from '../actions/toolsActions';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
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
                rating: i,
            });
        }

        currentUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };

        props = {
                currentUser: currentUser,
                tools: tools
            };
    })
 
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
/*    
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
*/    
});
