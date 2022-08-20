import React from 'react';
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe('Tests in <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })

  test('should show a snapshot of AddCategory', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change value in text input', () => {
    const input = wrapper.find('input');
    const value = 'Hello World';
    input.simulate('change', { target: { value } });

    const paragraph = wrapper.find('p');
    const text = paragraph.text().trim();
    expect(text).toBe(value);
  });

  test('should not post information on submit', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean text box', () => {
    const value = 'Hi world';

    // 1 - simulate inputChange
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });

    // 2 - simulate submit
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault(){} })

    // 3 - setCategories have to be called
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

    // 4 - input value should be ''
    const { value: text } = input.props();
    expect(text).toBe('');
  });
});