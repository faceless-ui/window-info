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
        {children}
      </WindowInfoContext.Provider>
    );
  }
}

WindowInfoProvider.defaultProps = {
  breakpoints: {},
};

WindowInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
};

export default WindowInfoProvider;
