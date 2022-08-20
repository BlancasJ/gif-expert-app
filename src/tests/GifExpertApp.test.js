import React from 'react';
import GifExpertApp from '../GifExpertApp.js';
import { shallow } from "enzyme";

describe('Tests in GifExpertApp', () => {
  test('should show snapshot of GifExpertApp', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a list of categories', () => {
    const categories = ['One Punch', 'Rick and Morty'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );
  });
});