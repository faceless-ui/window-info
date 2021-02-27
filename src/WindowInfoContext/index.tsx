import { createContext } from 'react';
import { IWindowInfoContext } from './types';

export const WindowInfoContext = createContext<IWindowInfoContext>({} as IWindowInfoContext);

export default WindowInfoContext;
