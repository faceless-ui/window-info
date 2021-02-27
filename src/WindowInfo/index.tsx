import PropTypes from 'prop-types';
import useWindowInfo from '../useWindowInfo';

const WindowInfo: React.FC = (props) => {
  const { children } = props;
  const windowInfo = useWindowInfo();
  if (children) {
    if (typeof children === 'function') return children(windowInfo);
    return children;
  }
  return null;
};

WindowInfo.defaultProps = {
  children: undefined,
};

WindowInfo.propTypes = {
  children: PropTypes.func,
};

export default WindowInfo;
