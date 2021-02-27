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

export default WindowInfo;
