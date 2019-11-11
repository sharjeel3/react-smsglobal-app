import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('BUTTON - UI Library', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>my button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be clicked once', () => {
    const mockFn = jest.fn();
    const button = shallow(<Button onClick={mockFn}>Press me</Button>);
    button.simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);
  });
});
