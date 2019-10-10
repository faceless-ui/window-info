import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle as lodashThrottle } from 'lodash';
import MousePositionContext from './context';

class MousePosition extends Component {
  constructor(props) {
    super(props);
    const { throttle } = props;

    this.state = {
      mouseIsInViewport: false,
      mousePos: {
        x: 0,
        y: 0,
      },
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
    this.setState({ mouseIsInViewport: true });
  }

  onLeave = () => {
    this.setState({ mouseIsInViewport: false });
  }

  onMove = (e) => {
    this.setState({
      mousePos: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  }

  render() {
    const { children } = this.props;

    return (
      <MousePositionContext.Provider value={{ ...this.state }}>
        {children}
      </MousePositionContext.Provider>
    );
  }
}

MousePosition.defaultProps = {
  throttle: 400,
};

MousePosition.propTypes = {
  children: PropTypes.node.isRequired,
  throttle: PropTypes.number,
};

export default MousePosition;
