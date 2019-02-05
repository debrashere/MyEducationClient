import React from 'react';
import {shallow, mount} from 'enzyme';
import {ToolsForm} from '../components/tools-form';

describe('<AddForm />', () => {
    it('Renders without crashing', () => {
        shallow(<AddForm />);
    });

    it('Renders the submit button initially', () => {
        const wrapper = shallow(<ToolsForm />);
        expect(wrapper.hasClass('add-button')).toEqual(true);
    });

    it('Should render the tools form when editing', () => {
        const wrapper = shallow(<ToolsForm />);
        wrapper.instance().setEditing(true);
        wrapper.update();
        expect(wrapper.hasClass('add-form')).toEqual(true);
    });

    it('Should switch to submitting when the submit button is clicked', () => {
        const wrapper = shallow(<ToolsForm />);
        wrapper.simulate('click');
        expect(wrapper.state('editing')).toEqual(true);
    });

    it('Should fire the onclick callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<ToolsForm onAdd={callback} />);
        const value = 'Foobar';
        wrapper.instance().setEditing(true);
        wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value);
    });

    it('Should not fire onclick if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<ToolsForm onAdd={callback} />);
        wrapper.instance().setEditing(true);
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
}); 