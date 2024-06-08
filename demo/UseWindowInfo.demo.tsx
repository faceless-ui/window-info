import { useWindowInfo } from '@faceless-ui/window-info';
import LogProps from './LogProps';

const UseWindowInfo: React.FC = () => {
  const windowInfo = useWindowInfo();
  return LogProps(windowInfo);
};

export default UseWindowInfo;
