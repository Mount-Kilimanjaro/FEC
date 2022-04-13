import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { store } from '../../../store/index';
import { Provider } from 'react-redux';
import RatingsAndReviews from '../RatingsAndReviews.jsx';

configure({ adapter: new Adapter() });

afterEach(cleanup);

describe('RatingsAndReviews', () => {
  const wrapper = shallow(
    <Provider store={ store }>
      <RatingsAndReviews />
    </Provider>
  );

  it('renders to the DOM without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

});