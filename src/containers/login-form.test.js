import React from 'react';
import {shallow, mount, mockClear} from 'enzyme';
import {LoginForm, reduxForm} from './login-form';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
   
 
describe('async actions', () => { 
    let props;
    let loggedIn;
    let store;
    let values;
    let thisUser;
    beforeAll(() => {
        loggedIn = false;
        values = { 
            username: 'testUserName',
             password: 'testPassword' };
        thisUser = {
            firstName: "beebee",
            lastName: "sanders",
            username: "bsanders" };
            const dispatchMock = jest.fn();         
        store = mockStore({  auth: {authToken:'token', currentUser: null }});
        let handleSubmit = fn => fn(values);
        props = {
                loggedIn: loggedIn,
                store: store,
                handleSubmit: handleSubmit,
                values: values,
                dispatch: dispatchMock 
            };
    })

    it('Renders without crashing', () => {
        shallow(<LoginForm {...props} />);
    });
      
});
