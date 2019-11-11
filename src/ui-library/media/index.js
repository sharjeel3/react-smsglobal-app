import { generateMedia } from 'styled-media-query';
import { css } from 'styled-components';

const breakpoints = {
  xs: {
    min: `0px`,
    max: `375px`
  },
  sm: {
    min: `376px`,
    max: `767px`
  },
  md: {
    min: `768px`,
    max: `991px`
  },
  lg: {
    min: `992px`,
    max: `1199px`
  },
  xlg: {
    min: `1200px`,
    max: Infinity
  }
};

const sizeOptions = {
  sm: breakpoints.sm.min,
  md: breakpoints.md.min,
  lg: breakpoints.lg.min,
  xlg: breakpoints.xlg.min
};

export const customMedia = generateMedia({
  ...sizeOptions
});

/***
 * A function to resolve following issue with lessThan media query in styled-media-query API
 * Issue: By default lessThan and greaterThan share one unit. I would like the queries to be exclusive.
 * URL: https://github.com/morajabi/styled-media-query/issues/17
 * @param breakpoint - from our mapping
 * @param variance - it can be plus or minus depending upon less than or greater than
 * @returns CSS enclosed in given media query
 * Note: It does not support media queries with 'em'
 */

function getSizeFromBreakpoint(breakpoint, variance) {
  const px = sizeOptions[breakpoint];
  if (!px) return breakpoint;
  const num = Number(px.substr(0, px.indexOf('px')));
  return `${num + variance}px`;
}

export const belowMedia = breakpoint => (...args) => {
  return css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, -1)}) {
      ${css(...args)}
    }
  `;
};

export const aboveMedia = (...breakpoint) => {
  return customMedia.greaterThan(...breakpoint);
};
