import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Converter from './Converter.js';

const {shallow}=Enzyme

Enzyme.configure({ adapter: new Adapter() })
 
it('Currency Converter should be render', () => {
  const wrapper = shallow(<Converter/>);
  const textHeader = <label>Currency Converter:</label>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});


it('When select Currency, selectCurrency should be called', () => {
   const props = {
    selectCurrency: jest.fn()
  }
  const mockEvent = {
      target: {
        value: 'Test'
      }
  }
  const wrapper = shallow(<Converter {...props}/>);
  wrapper.find('select').simulate('change',mockEvent)
  expect(props.selectCurrency).toBeCalled()
});