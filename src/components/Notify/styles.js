import styled from 'styled-components';
import { brandColors } from '../../ui-library/brand/colors';

const headerHeight = 5 * 16;

export const NotifyRoot = styled.div`
  position: fixed;
  ${props =>
    headerHeight - props.scrollTop > 0 ? `top: calc(5em - ${props.scrollTop}px);` : `top: 0`}
  left: 0;
  width: 100%;
  text-align: center;
  background-color: ${brandColors.blue};
  color: ${brandColors.white};
  font-weight: bold;
  z-index: 1;
  max-height: 0;
  overflow: hidden;
  height: 2.5em;
  line-height: 2.5em;
  text-overflow: ellipsis;
  transition: max-height 0.2s;
  ${props =>
    props.isActive &&
    `
    max-height: 3em;
  `}
  ${props =>
    props.isError &&
    `
    background-color: ${brandColors.red};
  `}
`;
