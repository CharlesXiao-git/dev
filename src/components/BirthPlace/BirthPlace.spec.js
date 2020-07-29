import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BirthPlace from './BirthPlace.js';

const {shallow}=Enzyme

Enzyme.configure({ adapter: new Adapter() })
 
it('Birthplace should be render', () => {
  const wrapper = shallow(<BirthPlace/>);
  const textHeader = <label >Birthplace:</label>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});

it('When select Birthplace, selectBirthPlace should be called', () => {
   const props = {
    selectBirthPlace: jest.fn()
  }
  const mockEvent = {
      target: {
        value: 'Test'
      }
  }
  const wrapper = shallow(<BirthPlace {...props}/>);
  wrapper.find('select').simulate('change',mockEvent)
  expect(props.selectBirthPlace).toBeCalled()
});