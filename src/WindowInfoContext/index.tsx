import { createContext } from 'react';
import { Breakpoints } from '../types';

export interface IWindowInfoContext {
  width: number,
  height: number,
  '--vw': string,
  '--vh': string,
  breakpoints: Breakpoints,
  eventsFired: number,
}

const WindowInfoContext = createContext<IWindowInfoContext>({} as IWindowInfoContext);

export default WindowInfoContext;
