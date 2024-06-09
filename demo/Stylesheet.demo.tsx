import React, { Fragment } from 'react';
import type { Breakpoints } from '../src/types.js';

type Props = {
  breakpoints: Breakpoints
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
          __html: hasBreakpoints ? breakpointsKeys.map((key) => `@media${breakpoints[key]} { #${key} { color: green; } }`).join(' ') : '',
        }}
      />
      <code>
        <pre>
          @media:
          {hasBreakpoints && breakpointsKeys.map((breakpointKey) => (
            <div
              key={breakpointKey}
              id={breakpointKey}
            >
              {`${breakpointKey}: ${breakpoints[breakpointKey]}`}
            </div>
          ))}
        </pre>
      </code>
    </Fragment>
  );
};

export default StylesheetDemo;
