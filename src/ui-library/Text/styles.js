import styled from 'styled-components';
import { brandColors } from '../brand/colors';

export const NormalText = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  color: ${brandColors.darkGrey};
  margin-bottom: 0.5em;
  &:last-child {
    margin-bottom: 0;
  }
  ${props =>
    props.bold &&
    `
      font-weight: bold;
  `}
  ${props =>
    props.error &&
    `
      color: ${brandColors.red};
  `}
`;

export const Heading = styled.h2`
  font-size: 2em;
  line-height: 2em;
  color: ${brandColors.darkGrey};
  margin-bottom: 0.5em;
`;

export const CardText = NormalText;
