import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle as lodashThrottle } from 'lodash';
import WindowSizeContext from './context';

class WindowSizeProvider extends Component {
  constructor(props) {
    super(props);
    const { throttle } = props;

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
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
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
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

WindowSizeProvider.defaultProps = {
  throttle: 400,
};

WindowSizeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  throttle: PropTypes.number,
};

export default WindowSizeProvider;
