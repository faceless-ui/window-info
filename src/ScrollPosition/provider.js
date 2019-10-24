import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle as lodashThrottle } from 'lodash';
import ScrollPositionContext from './context';

class ScrollPositionProvider extends Component {
  constructor(props) {
    super(props);
    const { throttle } = props;

    this.state = {
      x: 0,
      y: 0,
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
    this.setState({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  }

  render() {
    const { children } = this.props;

    const scrollPositionContext = {
      scrollPos: {
        ...this.state,
      },
    };

    return (
      <ScrollPositionContext.Provider value={scrollPositionContext}>
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
