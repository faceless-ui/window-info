import { useWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import LogProps from './LogProps';

const UseWindowInfo = () => {
  const windowInfo = useWindowInfo();
  return LogProps(windowInfo);
};

export default UseWindowInfo;
