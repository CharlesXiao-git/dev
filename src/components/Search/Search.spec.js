import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Search from './Search.js';

const {shallow}=Enzyme

Enzyme.configure({ adapter: new Adapter() })
 
it('Search should be render', () => {
  const wrapper = shallow(<Search/>);
  const textHeader =  <label>Search:</label>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});

it('When input search, selectSearchKey should be called', () => {
   const props = {
    selectSearchKey: jest.fn()
  }
  const mockEvent = {
  	  which: 13,
      target: {
        value: 'Test'
      }
  }
  const wrapper = shallow(<Search {...props}/>);
  wrapper.find('input').simulate('keypress',mockEvent)
  expect(props.selectSearchKey).toBeCalled()
});