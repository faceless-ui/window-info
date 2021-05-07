import { useContext } from 'react';
import WindowInfoContext, { IWindowInfoContext } from '../WindowInfoContext';

const useWindowInfo = (): IWindowInfoContext => useContext(WindowInfoContext);

export default useWindowInfo;
