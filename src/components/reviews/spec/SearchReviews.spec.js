import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SearchReviews from '../SearchReviews.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

// !100% coverage
describe('Search Reviews', () => {
  var onSearchChange = jest.fn();
  const wrapper = shallow(
    <SearchReviews filterBySearch={onSearchChange}/>
  );
  const e = {
    preventDefault() {},
    target: {value: 'value'}
  };

  it('renders to the DOM without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call onChange prop', () => {
    wrapper.find('.searchBar').simulate('change', e);
    expect(onSearchChange).toBeCalledWith('value');
  });
});