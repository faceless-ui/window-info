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
        tinyBreak: false,
        smallBreak: false,
        midBreak: false,
        largeBreak: false,
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
      tinyBreakpoint,
      smallBreakpoint,
      midBreakpoint,
      largeBreakpoint,
    } = this.props;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    this.setState({
      windowHeight,
      windowWidth,
      breakpoints: {
        tinyBreak: windowWidth <= tinyBreakpoint,
        smallBreak: windowWidth <= smallBreakpoint,
        midBreak: windowWidth <= midBreakpoint,
        largeBreak: windowWidth <= largeBreakpoint,
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
  tinyBreakpoint: undefined,
  smallBreakpoint: undefined,
  midBreakpoint: undefined,
  largeBreakpoint: undefined,
};

WindowInfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
  throttle: PropTypes.number,
  tinyBreakpoint: PropTypes.number,
  smallBreakpoint: PropTypes.number,
  midBreakpoint: PropTypes.number,
  largeBreakpoint: PropTypes.number,
};

export default WindowInfoProvider;
