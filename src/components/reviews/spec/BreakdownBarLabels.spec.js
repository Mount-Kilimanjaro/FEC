import React from 'react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BreakdownBarLabels from '../BreakdownBarLabels.jsx';

configure({ adapter: new Adapter() });
afterEach(cleanup);

// !100% coverage
describe('Breakdown Bar Labels', () => {

  it('renders to the DOM without errors', () => {
    const wrapper = shallow(
      <BreakdownBarLabels />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct sublabels for size', () => {
    const wrapper = shallow(
      <BreakdownBarLabels char={'Size'} />
    );
    const labels = wrapper.find('.labels-container');
    expect(labels.text()).toBe('Too smallToo big');
  });

  it('renders the correct sublabels for length', () => {
    const wrapper = shallow(
      <BreakdownBarLabels char={'Length'} />
    );
    const labels = wrapper.find('.labels-container');
    expect(labels.text()).toBe('Too shortToo long');
  });

  it('renders the correct sublabels for fit', () => {
    const wrapper = shallow(
      <BreakdownBarLabels char={'Fit'} />
    );
    const labels = wrapper.find('.labels-container');
    expect(labels.text()).toBe('Too smallToo big');
  });

  it('renders the correct sublabels for comfort', () => {
    const wrapper = shallow(
      <BreakdownBarLabels char={'Comfort'} />
    );
    const labels = wrapper.find('.labels-container');
    expect(labels.text()).toBe('UncomfortablePerfect');
  });

  it('renders the correct sublabels for quality', () => {
    const wrapper = shallow(
      <BreakdownBarLabels char={'Quality'} />
    );
    const labels = wrapper.find('.labels-container');
    expect(labels.text()).toBe('PoorGreat');
  });

  it('renders the correct sublabels for width', () => {
    const wrapper = shallow(
      <BreakdownBarLabels char={'Width'} />
    );
    const labels = wrapper.find('.labels-container');
    expect(labels.text()).toBe('Too narrowToo wide');
  });
});