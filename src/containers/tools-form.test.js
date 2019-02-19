import React from 'react';
import {shallow, mount} from 'enzyme';
import * as types from '../contraints/toolsActionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import {mapStateToProps, ToolsForm, reduxForm} from './tools-form';
import renderer  from 'react-test-renderer';
 
jest.mock('../actions/toolsActions');
import * as actions from '../actions/__mocks__/toolsActions';
import { setStore, store} from  '../actions/__mocks__/toolsActions';
 
//configure({ adapter: new Adapter() });
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
   
describe('<ToolsForm />', () => {
    let thisTools = [];
    let currentUser;
    let loggedIn;
    let props;
    let values;
    beforeAll(() => {

        for (let i = 1; i < 6 ; i++) {
            thisTools.push({
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

        setStore(mockStore({ tools: [],  auth: {authToken:'token' }}));
        
        values = { 
            title: 'title',
             url: 'www.google.com', 
             description: 'description', 
             price: '1.00',
             rating: '3' };

        let handleSubmit = fn => fn(values);
      
        props = {
                currentUser: currentUser,
                tools: thisTools,
                loggedIn: loggedIn,
                store,
                error: null,
                handleSubmit,
                pristine: true, 
                reset: false, 
                submitting: false, 
                submitSucceeded :null
            };
    })

    it('Renders without crashing', () => {
        shallow(<ToolsForm store={store} {...props} />);
    });
 
    it('Snapshot test', () => {
        const tree = renderer.create(<reduxForm {...props} />);   
        expect(tree.toJSON()).toMatchSnapshot();
    });
 
});
