import PropTypes from 'prop-types';
import { withWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import PrintObject from './PrintObject';

const WithWindowInfo = (props) => {
  const { windowInfo } = props;
  return PrintObject(windowInfo);
};

WithWindowInfo.defaultProps = {};

WithWindowInfo.propTypes = {
  windowInfo: PropTypes.shape({}).isRequired,
};

export default withWindowInfo(WithWindowInfo);
