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
     
 
 /*
    it('Renders the add button initially', () => {
        const wrapper = shallow(<ToolsPage  {...props} />);
        console.log(wrapper.debug());
        expect(wrapper.hasClass('add-button')).toEqual(true);
    });
 */
    /*
    it('Should render the add form when editing', () => {
        const wrapper = shallow(<ToolsPage   {...props} />);
        wrapper.instance().setEditing(true);
        wrapper.update();
        expect(wrapper.hasClass('add-form')).toEqual(true);
    });

    it('Should switch to editing when the add button is clicked', () => {
        const wrapper = shallow(<ToolsPage  {...props}  />);
        wrapper.simulate('click');
        expect(wrapper.state('editing')).toEqual(true);
    });
*/

/*
    it('Should fire the onAdd callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<ToolsPage  {...props}  onAdd={callback} />);
        const value = 'Foobar';
        wrapper.instance().setEditing(true);
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire onAdd if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<ToolsPage  {...props}  onAdd={callback} />);
        wrapper.instance().setEditing(true);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
*/    
});
