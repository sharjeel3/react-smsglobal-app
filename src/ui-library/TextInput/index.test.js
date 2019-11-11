import React from 'react';
import { mount } from 'enzyme';
import { TextInput } from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('TEXT INPUT - UI Library', () => {
  it('renders correctly', () => {
    const onChangeMock = jest.fn();
    const tree = renderer
      .create(<TextInput id="test" onChange={onChangeMock} value="val" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have correct value', () => {
    const value = 'some-val';
    const textInput = mount(<TextInput id="testing" value={value} />);
    expect(textInput.find('input').prop('value')).toBe(value);
  });

  it('should call change handler', () => {
    const mockFn = jest.fn();
    const value = 'new-val';
    const textInput = mount(<TextInput onChange={mockFn} id="test" value="" />);
    textInput.find('input').simulate('change', { target: { value } });
    expect(mockFn).toBeCalledWith(value);
  });
});
