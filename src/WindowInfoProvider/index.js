import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowInfoContext from './context';

class WindowInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      '--vw': '0px',
      '--vh': '0px',
      breakpoints: {
        xs: false,
        s: false,
        m: false,
        l: false,
        xl: false,
      },
      eventsFired: 0,
      animationScheduled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.requestAnimation);
    window.addEventListener('orientationchange', this.updateWindowInfoWithTimeout);
    this.updateWindowInfo();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.requestAnimation);
    window.removeEventListener('orientationchange', this.updateWindowInfoWithTimeout);
  }

  updateWindowInfoWithTimeout = () => {
    setTimeout(() => {
      this.requestAnimation();
    }, 500);
  }

  requestAnimation = () => {
    const { animationScheduled } = this.state;
    if (!animationScheduled) {
      this.setState({
        animationScheduled: true,
      }, () => requestAnimationFrame(this.updateWindowInfo));
    }
  }

  updateWindowInfo = () => {
    const {
      breakpoints: {
        xs, s, m, l, xl,
      },
    } = this.props;

    const { eventsFired: prevEventsFired } = this.state;

    const {
      documentElement: {
        style,
        clientWidth,
        clientHeight,
      },
    } = document;

    const {
      innerWidth: windowWidth,
      innerHeight: windowHeight,
    } = window;

    const viewportWidth = `${clientWidth / 100}px`;
    const viewportHeight = `${clientHeight / 100}px`;

    this.setState({
      width: windowWidth,
      height: windowHeight,
      '--vw': viewportWidth,
      '--vh': viewportHeight,
      breakpoints: {
        xs: windowWidth <= xs,
        s: windowWidth <= s,
        m: windowWidth <= m,
        l: windowWidth <= l,
        xl: windowWidth <= xl,
      },
      eventsFired: prevEventsFired + 1,
      animationScheduled: false,
    });

    // This method is a cross-browser patch to achieve above-the-fold, fullscreen mobile experiences.
    // The technique accounts for the collapsing bottom toolbar of some mobile browsers which are out of normal flow.
    // It provides an alternate to the "vw" and "vh" CSS units by generating respective CSS variables.
    // It specifically reads the size of documentElement since its height does not include the toolbar.
    style.setProperty('--vw', viewportWidth);
    style.setProperty('--vh', viewportHeight);
  }

  render() {
    const { children } = this.props;
    const windowInfo = { ...this.state };
    delete windowInfo.animationScheduled;

    return (
      <WindowInfoContext.Provider value={{ ...windowInfo }}>
        {children && children}
      </WindowInfoContext.Provider>
    );
  }
}

WindowInfoProvider.defaultProps = {
  children: undefined,
  breakpoints: {},
};

WindowInfoProvider.propTypes = {
  children: PropTypes.node,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
};

export default WindowInfoProvider;
