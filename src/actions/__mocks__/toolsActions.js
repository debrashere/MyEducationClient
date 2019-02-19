import * as types from '../../contraints/toolsActionTypes';
//import * as actions from '../../actions/toolsActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let tools = [];
let mockedStore = mockStore({ auth: {authToken:'token' }});
 
export const setTools = (thisTools) => ( tools = thisTools );
export const setStore = (thisStore) => ( mockedStore = thisStore );
export const store = mockedStore;

export const fetchTools = () => (dispatch, getState) => {    

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
            
            return expected        
}
    
 
