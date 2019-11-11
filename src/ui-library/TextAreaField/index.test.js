import React from 'react';
import { mount } from 'enzyme';
import { TextAreaField } from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('TEXT AREA FIELD - UI Library', () => {
  it('renders correctly', () => {
    const onChangeMock = jest.fn();
    const tree = renderer
      .create(<TextAreaField id="test" onChange={onChangeMock} value="val" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have correct value', () => {
    const value = 'some-val';
    const textInput = mount(<TextAreaField id="testing" value={value} />);
    expect(textInput.find('textarea').prop('value')).toBe(value);
  });

  it('should call change handler', () => {
    const mockFn = jest.fn();
    const value = 'new-val';
    const textInput = mount(<TextAreaField onChange={mockFn} id="test" value="" />);
    textInput.find('textarea').simulate('change', { target: { value } });
    expect(mockFn).toBeCalledWith(value);
  });
});
