import styled from 'styled-components';
import { brandColors } from '../brand/colors';

export const Root = styled.div`
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  font-size: 1em;
  padding: 0 1em;
  background-color: ${brandColors.lightGrey};
  border: 0.1em solid transparent;
  border-radius: 0.25em;
  color: ${brandColors.darkGrey};
  height: 4em;
  line-height: 4em;
  width: 100%;
  ${props =>
    props.hasError &&
    `
      border-color: ${brandColors.red};
  `}
`;
