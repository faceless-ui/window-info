import PropTypes from 'prop-types';
import useWindowInfo from '../useWindowInfo';

const WindowInfo = (props) => {
  const { children } = props;
  const windowInfo = useWindowInfo();
  if (children && typeof children === 'function') return children(windowInfo);
  return null;
};

WindowInfo.defaultProps = {
  children: undefined,
};

WindowInfo.propTypes = {
  children: PropTypes.func,
};

export default WindowInfo;
