import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle as lodashThrottle } from 'lodash';
import ScrollPositionContext from './context';

class ScrollPositionProvider extends Component {
  constructor(props) {
    super(props);
    const { throttle } = props;

    this.state = {
      scrollPos: 0,
    };

    this.onScrollWithThrottle = lodashThrottle(() => {
      this.onScroll();
    }, throttle);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollWithThrottle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollWithThrottle);
  }

  onScroll = () => {
    this.setState({ scrollPos: window.pageYOffset });
  }

  render() {
    const { children } = this.props;

    return (
      <ScrollPositionContext.Provider value={{ ...this.state }}>
        {children}
      </ScrollPositionContext.Provider>
    );
  }
}

ScrollPositionProvider.defaultProps = {
  throttle: 40,
};

ScrollPositionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  throttle: PropTypes.number,
};

export default ScrollPositionProvider;
