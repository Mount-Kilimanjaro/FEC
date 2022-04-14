import React from 'react'
import '@testing-library/jest-dom';
import { cleanup} from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReviewModal from '../ReviewModal.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Review Modal', () => {

  const wrapper = shallow(
    <ReviewModal />
  );

  it('renders to the DOM without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });
});