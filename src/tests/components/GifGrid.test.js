import React from 'react';
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests in GifGrid', () => {
  test('should show snapshot', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category='One punch'/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when useFetchGifs return images', () => {
    const gifs = [
      {
        id: 1,
        url: 'https://media4.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=da2f845e2y7qk5or0ob5qgkwccppdh5v5xduh22van8xm9xb&rid=giphy.gif&ct=g',
        title: 'One Punch Man',
      },
      {
        id: 2,
        url: 'https://media4.giphy.com/media/yo3TC0yeHd53G/giphy.gif?cid=da2f845e2y7qk5or0ob5qgkwccppdh5v5xduh22van8xm9xb&rid=giphy.gif&ct=g',
        title: 'One Punch Man',
      }
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category='One punch'/>);
    //expect(wrapper).toMatchSnapshot();
    expect( wrapper.find('p').exists() ).toBe(false);
    expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
  });
});