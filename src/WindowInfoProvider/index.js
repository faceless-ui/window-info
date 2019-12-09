import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowInfoContext from './context';

class WindowInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
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
      requestAnimationFrame(this.updateWindowInfo);
      this.setState({ animationScheduled: true });
    }
  }

  updateWindowInfo = () => {
    const {
      breakpoints: {
        xs, s, m, l, xl,
      },
    } = this.props;

    const { eventsFired } = this.state;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.setState({
      animationScheduled: false,
      width: windowWidth,
      height: windowHeight,
      breakpoints: {
        xs: windowWidth <= xs,
        s: windowWidth <= s,
        m: windowWidth <= m,
        l: windowWidth <= l,
        xl: windowWidth <= xl,
      },
      eventsFired: eventsFired + 1,
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
    const {
      width,
      height,
      breakpoints,
      eventsFired,
    } = this.state;

    return (
      <WindowInfoContext.Provider
        value={{
          windowInfo: {
            width,
            height,
            breakpoints,
            eventsFired,
          },
        }}
      >
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
