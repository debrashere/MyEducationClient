import React from 'react';
import {shallow} from 'enzyme';
import {Dashboard} from './dashboard';

describe('<Dashboard/>', () => { 

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Dashboard  />);
    });
});
