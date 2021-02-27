import { createContext } from 'react';
import { IWindowInfoContext } from './types';

const WindowInfoContext = createContext<IWindowInfoContext>({} as IWindowInfoContext);

export default WindowInfoContext;
