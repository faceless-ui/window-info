import { withWindowInfo } from '../src'; // swap '../src' for '../dist/build.bundle' to demo production build
import { IWindowInfoContext } from '../src/WindowInfoContext/types';
import LogProps from './LogProps';

type Props = {
  windowInfo: IWindowInfoContext
}

const WithWindowInfo: React.FC<Props> = (props) => {
  const { windowInfo } = props;
  return LogProps(windowInfo);
};

export default withWindowInfo(WithWindowInfo);
