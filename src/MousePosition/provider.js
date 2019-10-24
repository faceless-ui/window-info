import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle as lodashThrottle } from 'lodash';
import MousePositionContext from './context';

class MousePositionProvider extends Component {
  constructor(props) {
    super(props);
    const { throttle } = props;

    this.state = {
      x: 0,
      y: 0,
      isInViewport: false,
    };

    this.onMoveWithThrottle = lodashThrottle((e) => {
      this.onMove(e);
    }, throttle);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMoveWithThrottle);
    document.addEventListener('mouseenter', this.onEnter);
    document.addEventListener('mouseleave', this.onLeave);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMoveWithThrottle);
    document.removeEventListener('mouseenter', this.onEnter);
    document.removeEventListener('mouseleave', this.onLeave);
  }

  onEnter = () => {
    this.setState({ isInViewport: true });
  }

  onLeave = () => {
    this.setState({ isInViewport: false });
  }

  onMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }

  render() {
    const { children } = this.props;

    const mousePositionContext = {
      mousePos: {
        ...this.state,
      },
    };

    return (
      <MousePositionContext.Provider value={mousePositionContext}>
        {children}
      </MousePositionContext.Provider>
    );
  }
}

MousePositionProvider.defaultProps = {
  throttle: 400,
};

MousePositionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  throttle: PropTypes.number,
};

export default MousePositionProvider;
