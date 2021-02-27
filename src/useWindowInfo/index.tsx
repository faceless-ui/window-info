import { useContext } from 'react';
import WindowInfoContext from '../WindowInfoContext';
import { IWindowInfoContext } from '../WindowInfoContext/types';

const useWindowInfo = (): IWindowInfoContext => useContext(WindowInfoContext);

export default useWindowInfo;
