import React from 'react';
import {shallow} from 'enzyme';


import {Dashboard} from './dashboard';
//import DashboardMenu from './dashboard-menu';
//import {addList} from '../actions';

describe('<Dashboard/>', () => { 

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Dashboard title="Foo" dispatch={dispatch} />);
    });
});
