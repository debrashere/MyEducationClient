import React from 'react';
import {shallow, mount, renderer} from 'enzyme';
import {ToolsForm} from './tools-form';
 
    //import * as types from '../contraints/toolsActionTypes';
    //import * as actions from '../actions/toolsActions';
    
    //import configureMockStore from 'redux-mock-store'
    //import thunk from 'redux-thunk'
     
    //const middlewares = [thunk]
    //const mockStore = configureMockStore(middlewares)
    
    describe('<ToolsForm/>', () => {
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

        it('render correctly ToolsForm component', () => {  
            const ToolsFormComponent = renderer.create(<ToolsForm />).toJSON();
            expect(ToolsFormComponent).toMatchSnapshot();
        });
/*
        it('check form fields displayed', () => {  
            const props = {
                    currentUser: currentUser
                },
             ToolsFormComponent = mount(<ToolsForm {...props} />).find('#title');
            expect(ToolsFormComponent.hasClass('react-datepicker-hide-month')).toEqual(true);
        });
 */       
});
    