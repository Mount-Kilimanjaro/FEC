import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ImageModal from '../ImageModal.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

describe('Image Modal', () => {

  const wrapper = mount(
    <ImageModal />
  );

  it('renders to the DOM without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // it('display is set to none before click event fires', () => {
  //   // expect(wrapper.find('.img-modal')).props).toBe('none');
  //   const modal = wrapper.find('#img-modal');
  //   console.log(modal.prop('display'));
  // });

});
