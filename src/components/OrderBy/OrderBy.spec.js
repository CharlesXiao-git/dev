import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import OrderBy from './OrderBy.js';

const {shallow}=Enzyme

Enzyme.configure({ adapter: new Adapter() })
 
it('Order By should be render', () => {
  const wrapper = shallow(<OrderBy/>);
  const textHeader =  <label>Order By:</label>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});

it('When select selectOrderBy, selectOrderBy should be called', () => {
   const props = {
    selectOrderBy: jest.fn()
  }
  const mockEvent = {
      target: {
        value: 'Test'
      }
  }
  const wrapper = shallow(<OrderBy {...props}/>);
  wrapper.find('select').simulate('change',mockEvent)
  expect(props.selectOrderBy).toBeCalled()
});