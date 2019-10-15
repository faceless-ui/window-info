import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle as lodashThrottle } from 'lodash';
import ScrollPositionContext from './context';

class ScrollPositionProvider extends Component {
  constructor() {
    super();
    this.state = {
      scrollPos: 0,
    };
  }

  componentDidMount() {
    const { throttle } = this.props;
    window.addEventListener('scroll', this.onScroll, throttle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = lodashThrottle(() => {
    this.setState({ scrollPos: window.pageYOffset });
  })

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
