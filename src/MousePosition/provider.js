import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MousePositionContext from './context';

class MousePositionProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
      mousePos: {
        x: 0,
        y: 0,
        isInViewport: false,
      },
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.requestAnimation);
    document.addEventListener('mouseenter', () => this.setViewportStatus(true));
    document.addEventListener('mouseleave', () => this.setViewportStatus(false));
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.requestAnimation);
    document.removeEventListener('mouseenter', this.setViewportStatus);
    document.removeEventListener('mouseleave', this.setViewportStatus);
  }

  setViewportStatus = (status) => {
    const { mousePos } = this.state;

    this.setState({
      mousePos: {
        ...mousePos,
        isInViewport: status,
      },
    });
  }

  updateMousePos = (e) => {
    const { mousePos } = this.state;

    this.setState({
      animationScheduled: false,
      mousePos: {
        ...mousePos,
        x: e.clientX,
        y: e.clientY,
      },
    });
  };

  requestAnimation = (e) => {
    const { animationScheduled } = this.state;

    if (!animationScheduled) {
      requestAnimationFrame(() => this.updateMousePos(e));
      this.setState({ animationScheduled: true });
    }
  }

  render() {
    const { children } = this.props;
    const { mousePos } = this.state;

    const something = '';

    return (
      <MousePositionContext.Provider value={{ mousePos }}>
        {children}
      </MousePositionContext.Provider>
    );
  }
}

MousePositionProvider.defaultProps = {};

MousePositionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MousePositionProvider;
