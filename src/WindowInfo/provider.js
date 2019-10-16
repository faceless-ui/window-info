import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle as lodashThrottle } from 'lodash';
import WindowSizeContext from './context';

class WindowInfoProvider extends Component {
  constructor(props) {
    super(props);
    const { throttle } = props;

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      breakpoints: {
        xs: false,
        s: false,
        m: false,
        l: false,
        xl: false,
      },
    };

    this.updateSizesWithThrottle = lodashThrottle(() => {
      this.updateSizes();
    }, throttle);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSizesWithThrottle);
    window.addEventListener('orientationchange', this.updateSizesWithTimeout);
    this.updateSizes();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSizesWithThrottle);
    window.removeEventListener('orientationchange', this.updateSizesWithTimeout);
  }

  updateSizesWithTimeout = () => {
    setTimeout(() => {
      this.updateSizes();
    }, 500);
  }

  updateSizes = () => {
    const {
      breakpoints: {
        xs, s, m, l, xl,
      },
    } = this.props;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.setState({
      windowHeight,
      windowWidth,
      breakpoints: {
        xs: windowWidth <= xs,
        s: windowWidth <= s,
        m: windowWidth <= m,
        l: windowWidth <= l,
        xl: windowWidth <= xl,
      },
    });
  }

  render() {
    const { children } = this.props;

    return (
      <WindowSizeContext.Provider value={{ ...this.state }}>
        {children}
      </WindowSizeContext.Provider>
    );
  }
}

WindowInfoProvider.defaultProps = {
  throttle: 400,
  breakpoints: {},
};

WindowInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  throttle: PropTypes.number,
  breakpoints: PropTypes.shape({
    xs: PropTypes.number,
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    xl: PropTypes.number,
  }),
};

export default WindowInfoProvider;
