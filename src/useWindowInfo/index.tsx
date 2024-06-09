'use client'
import { useContext } from 'react';
import { WindowInfoContext, type IWindowInfoContext } from '../WindowInfoProvider/context.js';

export const useWindowInfo = (): IWindowInfoContext => useContext(WindowInfoContext);
