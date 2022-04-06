import React from 'react';
import * as redux from 'react-redux';
import '@testing-library/jest-dom';
import { cleanup, render, screen} from '@testing-library/react';
import { store } from '../../../store/index';
import Overview from '../Overview.jsx';
import {configure , shallow, mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ProductImage from '../ProductImage';
import ProductInfo from '../ProductInfo';
import ProductSelector from '../ProductSelector';
configure({ adapter: new Adapter() });

// afterEach(cleanup)

const currentItem = {
  style: [{skus:1, photos: [{url:'https://picsum.photos/200/300'}]}],slogan: 'my slogan', description:'my description', features: [{feature:'feature 1', value:'value 1'},{feature:'feature 2', value:'value 2'}]
}


describe('OverView Testing', () => {
  const wrapper = shallow(
    <Provider store = {store}>
      <Overview/>
    </Provider>
  )
  test('renders overview initial load with redux and no error', () => {
    expect(wrapper.exists()).toBe(true);
  })
})

describe('ProductImage Component test', () => {
  let imageUrl ='https://picsum.photos/200/300'
  let imagesUrl = ['https://picsum.photos/200/300','https://picsum.photos/200/300','https://picsum.photos/200/300']

  const img = {imageUrl, imagesUrl, changeImgUrl: () => {}, carouselNextImage: () => {} , setNextImage: () => {}, setPreviousImage: () => {}}
  const wrapper = shallow(
      <ProductImage img={img}/>
  )
  test('render with no error', () => {
    expect(wrapper.exists()).toBe(true);
  })
  test('imageWheel to load with correct length of images', () => {
    expect(wrapper.find("#scrollImg").length).toBe(3)
  })
  test('main image to load', () => {
    expect(wrapper.find("#overview_main_img").prop('src')).toBe(imageUrl);
  })
})

describe('ProductInfo Testing', () => {
  const wrapper = shallow(
    <ProductInfo product={currentItem}/>
  )
  test('renders initial load with no error', () => {
    expect(wrapper.exists()).toBe(true);
  })

  test('Load Correct slogan', () => {
    expect(wrapper.find("#overview_slogan_text").text()).toBe('my slogan')
  })
  test('Load Correct description', () => {
    expect(wrapper.find("#overview_description_text").text()).toBe('my description')
  })
  test('Load all Features Info', () => {
    expect(wrapper.find("#overview_feature_text").length).toBe(2)
    wrapper.find("#overview_feature_text").forEach((node, i) => {
      expect(node.text()).toBe(`${currentItem.features[i].feature} : ${currentItem.features[i].value}`)
    })
  })
})

describe('ProductSelector Testing', () => {
  let styleIndex = 0;

  // jest.mock('react-redux', () => ({
  //   use: jest.fn(fn => fn()),
  // }));

  const wrapper = mount(
    <Provider store ={store}>
      <ProductSelector styleIndex={{styleIndex, handleSetStyleIndex: () => {}}} product={currentItem}  />
    </Provider>
  )
  test('renders initial load with no error', () => {
    expect(wrapper.exists()).toBe(true);
  })
})






