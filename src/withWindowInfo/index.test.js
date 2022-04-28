// TODO: migrate away from enzyme, maybe to React Testing Library

import React from 'react';
import { shallow } from 'enzyme';

import WindowInfoProvider from '../WindowInfoProvider';
import withWindowInfo from '.';

describe('withWindowInfo', () => {
  const WithWindowInfo = withWindowInfo(() => (
    <code>
      Hello, world!
    </code>
  ));

  // Note: when .props() is called on a shallow wrapper, the returned values will be
  // of the root node that the wrapper component renders — not the component itself.
  // See https://airbnb.io/enzyme/docs/api/ShallowWrapper/props.html
  const wrapper = shallow(
    <WindowInfoProvider
      breakpoints={{
        xs: 0,
        s: 350,
        m: 768,
        l: 1024,
        xl: 1400,
      }}
    >
      <WithWindowInfo />
    </WindowInfoProvider>,
  );

  it('rendered with an initial windowInfo prop of correct shape and value', () => {
    const { value: hocProps } = wrapper.props();

    expect(hocProps).toMatchObject({
      width: 1024, // default
      height: 768, // default
      breakpoints: {
        xs: false,
        s: false,
        m: false,
        l: true,
        xl: true,
      },
      eventsFired: 1,
    });
  });

  it('received an updated windowInfo prop after a window resize event', () => {
    window.resizeTo(767, 1200);
    const { value: hocProps } = wrapper.props();

    expect(hocProps).toMatchObject({
      width: 767,
      height: 1200,
      breakpoints: {
        xs: false,
        s: false,
        m: true,
        l: true,
        xl: true,
      },
      eventsFired: 2,
    });
  });
});
