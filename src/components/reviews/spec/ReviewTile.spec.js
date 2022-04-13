import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReviewTile from '../ReviewTile.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Review Tile', () => {
  var props = { review_id: 1136050, rating: 5, summary: '', recommend: true, response: null, body: 'meow meow meow meow meow', date: '2022-02-26T00:00:00.000Z', reviewer_name: 'Meow', helpfulness: 33, photos: [{ id: 2180328, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Scottish_fold_cat.jpg/220px-Scottish_fold_cat.jpg' }] };

  const wrapper = shallow(
    <ReviewTile
      review={ props }
    />);

  it('renders to the DOM without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('populates the review tile with the correct review data', () => {
    const summary = wrapper.find('.reviewBody');
    expect(summary.html()).toBe(`<div class="reviewBody ">meow meow meow meow meow</div>`);
  });

});