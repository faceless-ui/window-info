import { useWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import PrintObject from './PrintObject';

const UseWindowInfo = () => {
  const windowInfo = useWindowInfo();
  return PrintObject(windowInfo);
};

export default UseWindowInfo;
