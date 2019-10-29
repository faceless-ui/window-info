import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WindowSizeContext from './context';

class WindowInfoProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationScheduled: false,
      windowInfo: {
        width: 0,
        height: 0,
        breakpoints: {
          xs: false,
          s: false,
          m: false,
          l: false,
          xl: false,
        },
      },
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
      this.updateSizes();
    }, 500);
  }

  updateWindowInfo = () => {
    const {
      breakpoints: {
        xs, s, m, l, xl,
      },
    } = this.props;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.setState({
      animationScheduled: false,
      windowInfo: {
        width: windowWidth,
        height: windowHeight,
        breakpoints: {
          xs: windowWidth <= xs,
          s: windowWidth <= s,
          m: windowWidth <= m,
          l: windowWidth <= l,
          xl: windowWidth <= xl,
        },
      },
    });
  }

  requestAnimation = () => {
    const { animationScheduled } = this.state;
    if (!animationScheduled) {
      requestAnimationFrame(this.updateWindowInfo);
      this.setState({ animationScheduled: true });
    }
  }

  render() {
    const { children } = this.props;
    const { windowInfo } = this.state;

    return (
      <WindowSizeContext.Provider value={{ windowInfo }}>
        {children}
      </WindowSizeContext.Provider>
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
