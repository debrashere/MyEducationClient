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

    it('Renders the background image', () => {
        const wrapper = shallow(<Banner />);
        expect(wrapper.name()).toEqual('Banner');
    });

    it('Renders the <h1> and <p> elements in the Banner', () => {
        const wrapper = shallow(<Banner />);
        //expect(wrapper.html()).to.contain('<h1>Welcome to My Educational Tools App</h1>');
              //expect(wrapper.text()).toContain(wrapper.text('title-1'))    
              expect(wrapper.contains('<h1>Welcome to My Educational Tools App</h1>')).toEqual(true);  
    });
});
