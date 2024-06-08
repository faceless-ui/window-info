import { withWindowInfo } from '@faceless-ui/window-info';
import type { IWindowInfoContext } from '../src/types';
import LogProps from './LogProps';

const WithWindowInfo: React.FC<{
  windowInfo: IWindowInfoContext
}> = (props) => {
  const { windowInfo } = props;
  return LogProps(windowInfo);
};

export default withWindowInfo(WithWindowInfo);
