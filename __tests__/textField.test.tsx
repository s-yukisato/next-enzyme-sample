import React from 'react';
import {shallow} from 'enzyme';
import TextField from '../components/TextField'


test('Whether the text field changes', () => {
    const component = shallow(<TextField />)

    const textField = component.find('input')
    expect(textField.get(0).props.value).toEqual('test')

    textField.simulate('change', { target: { value: 'Hello' } })

    expect(textField.get(0).props.value).toEqual('Hello');
})