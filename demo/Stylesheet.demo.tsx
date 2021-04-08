import React, { Fragment } from 'react';

type Props = {
  breakpoints: {
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
  } = props;

  const breakpointsKeys = breakpoints && Object.keys(breakpoints);
  const hasBreakpoints = breakpointsKeys && Array.isArray(breakpointsKeys) && breakpointsKeys.length > 0;

  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: hasBreakpoints && breakpointsKeys.map((key) => `@media(max-width: ${breakpoints[key]}px) { #${key} { color: green; } }`).join(' '),
        }}
      />
      <code>
        <pre>
          @media:
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
      </code>
    </Fragment>
  );
};

export default StylesheetDemo;
