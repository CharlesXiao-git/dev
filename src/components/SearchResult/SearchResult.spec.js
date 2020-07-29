import React from 'react';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SearchResult from './SearchResult.js';

const {shallow}=Enzyme

Enzyme.configure({ adapter: new Adapter() })
 
it('SearchResult should be render', () => {
  const props = {
  "data": [
  ]
  };
  const wrapper = shallow(<SearchResult {...props}/>);
  const textHeader =  <p className="container-title"> No Result Found </p>;
  expect(wrapper.contains(textHeader)).toEqual(true);
});