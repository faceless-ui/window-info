import PropTypes from 'prop-types';
import { withWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from './LogProps';

const WithWindowInfo = (props) => {
  const { windowInfo } = props;
  return LogProps(windowInfo);
};

WithWindowInfo.defaultProps = {};

WithWindowInfo.propTypes = {
  windowInfo: PropTypes.shape({}).isRequired,
};

export default withWindowInfo(WithWindowInfo);
