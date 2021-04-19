import React, { Fragment } from 'react';

type Props = {
  breakpoints: {
    xs: number,
    s: number,
    m: number,
    l: number,
    xl: number
  }
  heightBreakpoints: {
    xs: number,
    s: number,
    m: number,
    l: number,
    xl: number
  }
}

const StylesheetDemo: React.FC<Props> = (props) => {
  const {
    breakpoints,
    heightBreakpoints,
  } = props;

  const breakpointsKeys = breakpoints && Object.keys(breakpoints);
  const hasBreakpoints = breakpointsKeys && Array.isArray(breakpointsKeys) && breakpointsKeys.length > 0;

  const heightBreakpointsKeys = breakpoints && Object.keys(breakpoints);
  const hasHeightBreakpoints = breakpointsKeys && Array.isArray(breakpointsKeys) && breakpointsKeys.length > 0;

  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: hasBreakpoints && breakpointsKeys.map((key) => `@media(max-width: ${breakpoints[key]}px) { #${key} { color: green; } }`).join(' '),
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: hasHeightBreakpoints && heightBreakpointsKeys.map((key) => `@media(max-height: ${heightBreakpoints[key]}px) { #h-${key} { color: green; } }`).join(' '),
        }}
      />
      <code>
        <pre>
          @media max-width:
          <div id="xs">
            xs
          </div>
          <div id="s">
            s
          </div>
          <div id="m">
            m
          </div>
          <div id="l">
            l
          </div>
          <div id="xl">
            xl
          </div>
        </pre>

        <pre>
          @media max-height:
          <div id="h-xs">
            xs
          </div>
          <div id="h-s">
            s
          </div>
          <div id="h-m">
            m
          </div>
          <div id="h-l">
            l
          </div>
          <div id="h-xl">
            xl
          </div>
        </pre>
      </code>
    </Fragment>
  );
};

export default StylesheetDemo;
