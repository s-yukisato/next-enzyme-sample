import {shallow} from 'enzyme'
import React from 'react'
import MyButton from '../src/mybutton'


test('mybutton test', () => {
    const component = shallow(<MyButton />)
    // p tag text
    expect(component.find('p').text()).toEqual('--')
    // click button
    component.find('button').simulate('click')

    expect(component.find('p').text()).toEqual('OK')
})