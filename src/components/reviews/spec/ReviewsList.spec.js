import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReviewsList from '../ReviewsList.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('ReviewsList', () => {

  var props = [{ review_id: 1136050, rating: 5, summary: '', recommend: true, response: null, body: 'meow meow meow meow meow', date: '2022-02-26T00:00:00.000Z', reviewer_name: 'Meow', helpfulness: 33, photos: [{ id: 2180328, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Scottish_fold_cat.jpg/220px-Scottish_fold_cat.jpg' }] }, { review_id: null, rating: null, summary: '', recommend: false, date: '', reviewer_name: '', helpfulness: null, photos: [{}]}];

  it('renders to the DOM without errors', () => {

    const wrapper = shallow(
      <ReviewsList
        reviews={ props }
      />);
    expect(wrapper.exists()).toBe(true);
  });

  // it('add review button adds two reviews to the list', () => {
  //   const { container }= render(<ReviewsList reviews={ props }/>)

  // });
});
