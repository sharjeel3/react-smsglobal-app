import styled from 'styled-components';
import { brandColors } from '../../ui-library/brand/colors';

export const NotifyRoot = styled.div`
  position: absolute;
  top: 5em;
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
  transition: all 1s;
  ${props =>
    props.isActive &&
    `
    max-height: 3em;
  `}
`;
