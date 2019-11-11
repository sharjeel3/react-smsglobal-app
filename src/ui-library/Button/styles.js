import styled from 'styled-components';
import { brandColors } from '../../ui-library/brand/colors';

export const StyledButton = styled.button`
  font-size: 1em;
  height: 2.5em;
  line-height: 2.5em;
  text-overflow: ellipsis;
  color: ${brandColors.white};
  background-color: ${brandColors.green};
  cursor: pointer;
  padding: 0 2em;
  border-radius: 0.25em;
  ${props => props.fullWidth && `width: 100%`}
  ${props =>
    props.large &&
    `
    height: 3em;
    line-height: 3em;
  `}
  ${props =>
    props.light &&
    `
    background-color: ${brandColors.lightGrey};
    color: ${brandColors.darkGrey}
  `}
`;
