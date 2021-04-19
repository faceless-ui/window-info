interface IBreakpoints {
  xs: boolean,
  s: boolean,
  m: boolean,
  l: boolean,
  xl: boolean,
}

export interface IWindowInfoContext {
  width: number,
  height: number,
  '--vw': string,
  '--vh': string,
  breakpoints: IBreakpoints,
  heightBreakpoints: IBreakpoints,
  eventsFired: number,
  animationScheduled: boolean,
}
