import { useContext } from 'react';
import WindowInfoContext, { IWindowInfoContext } from '../WindowInfoProvider/context';

const useWindowInfo = (): IWindowInfoContext => useContext(WindowInfoContext);

export default useWindowInfo;
