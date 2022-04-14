import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RatingBreakdown from '../RatingBreakdown.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Rating Breakdown', () => {

  let wrapper;
  let props = { characteristics: { Comfort: { id: 125033, value: '3.2201834862385321' }, Fit: { id: 125031, value: '3.1925925925925926' }, Length: {id: 125032, value: "3.1418918918918919" }, Quality: { id: 125034 , value: "3.3055555555555556" }}, product_id: '37311', ratings: { 1: '26', 2: '16', 3: '41', 4: '42', 5: '104' }, recommended: { false: '45', true: '184' }};
  let mockClick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <RatingBreakdown
        metadata={ props }
        onClick={ mockClick }
        sortByStars={() => {}}
      />
    );
    jest.restoreAllMocks();
  });

  it('renders to the DOM without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('calculates the correct average rating', () => {
    expect(wrapper.find('#averageRating').text().includes('3.8')).toBe(true);
  });

});