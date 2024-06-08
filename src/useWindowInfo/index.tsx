'use client'
import { useContext } from 'react';
import WindowInfoContext, { IWindowInfoContext } from '../WindowInfoProvider/context.js';

const useWindowInfo = (): IWindowInfoContext => useContext(WindowInfoContext);

export default useWindowInfo;
