import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowInfoContext from './context';

class WindowInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
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

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.setState({
      width: windowWidth,
      height: windowHeight,
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

    this.setCSSVariables();
  }

  // This method is a cross-browser patch to achieve above-the-fold, fullscreen mobile experiences.
  // The technique accounts for the collapsing bottom toolbar of some mobile browsers which are out of normal flow.
  // It provides an alternate to the "vw" and "vh" CSS units by generating respective CSS variables.
  // It specifically reads the size of documentElement since its height does not include the toolbar.
  setCSSVariables = () => {
    const {
      documentElement: {
        style,
        clientWidth,
        clientHeight,
      },
    } = document;

    style.setProperty('--vw', `${clientWidth * 0.01}px`);
    style.setProperty('--vh', `${clientHeight * 0.01}px`);
  }

  render() {
    const { children } = this.props;
    const windowInfo = { ...this.state };
    delete windowInfo.animationScheduled;

    return (
      <WindowInfoContext.Provider value={{ windowInfo }}>
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
