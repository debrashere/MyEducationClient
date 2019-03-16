import React from 'react';
import {shallow} from 'enzyme';
import {Banner} from './banner';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<Banner/>', () => { 

    it('Renders without crashing', () => {       
        shallow(<Banner />);
    });

});
