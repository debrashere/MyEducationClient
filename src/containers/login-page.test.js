import React from 'react';
import {shallow, mount, mockClear} from 'enzyme';
import LoginPage from './login-page';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
   
 
describe('async actions', () => { 
    let props;
    let loggedIn;
    let thisUser;
    let store;
    beforeAll(() => {
        loggedIn = true;
        thisUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };
        store = mockStore({  auth: {authToken:'token', currentUser: thisUser }});

        props = {
                loggedIn: loggedIn,
                store: store
            };
    })

    it('Renders without crashing', () => {
        shallow(<LoginPage {...props} />);
    }); 
     
});
