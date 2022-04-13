import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductBreakdownBars from '../ProductBreakdownBars.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

// !100% coverage
describe('Product Breakdown Bars', () => {

  const props = { id: 125031, value: '3.1925925925925926' };

  const wrapper = shallow(
    <ProductBreakdownBars metadata={props}/>
  );

  it('renders to the DOM without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

});