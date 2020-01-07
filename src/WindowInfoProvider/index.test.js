import React from 'react';
import { mount } from 'enzyme';

import WindowInfoProvider from '.';

describe('WindowInfoProvider', () => {
  const wrapper = mount(
    <WindowInfoProvider
      breakpoints={{
        xs: 0,
        s: 350,
        m: 768,
        l: 1024,
        xl: 1400,
      }}
    />,
  );

  it('rendered with an initial state of correct shape and value', () => {
    const state = wrapper.state();

    expect(state).toMatchObject({
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

  it('responded to a window resize event with an internal state update', () => {
    window.resizeTo(767, 1200);
    const state = wrapper.state();

    expect(state).toMatchObject({
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

  // it('properly attached --vw and --vh CSS variables to the documentElement', () => {
  //   const { document: { documentElement: { style } } } = window;
  //   expect(style.getPropertyValue('--vw')).toMatch('0px');
  //   expect(style.getPropertyValue('--vh')).toMatch('0px');
  // });
});
