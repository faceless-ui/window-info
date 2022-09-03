import { withWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import { IWindowInfoContext } from '../src/WindowInfoProvider/context';
import LogProps from './LogProps';

const WithWindowInfo: React.FC<{
  windowInfo: IWindowInfoContext
}> = (props) => {
  const { windowInfo } = props;
  return LogProps(windowInfo);
};

export default withWindowInfo(WithWindowInfo);
