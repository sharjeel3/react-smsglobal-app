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
`;

export const Heading = styled.h2`
  font-size: 2em;
  line-height: 3em;
  color: ${brandColors.darkGrey};
  margin-bottom: 0.5em;
`;

export const CardText = styled(NormalText)`
  ${props =>
    props.bold &&
    `
      font-weight: bold;
  `}
`;
