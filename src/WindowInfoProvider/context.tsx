'use client'
import { createContext } from 'react';

export type WatchedBreakpoints = {
  [key: string]: boolean
}

export interface IWindowInfoContext {
  width?: number,
  height?: number,
  '--vw': string,
  '--vh': string,
  breakpoints: WatchedBreakpoints,
  eventsFired: number,
}

export const WindowInfoContext = createContext<IWindowInfoContext>({} as IWindowInfoContext);
