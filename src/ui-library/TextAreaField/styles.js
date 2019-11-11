import styled from 'styled-components';
import { brandColors } from '../brand/colors';

export const Root = styled.div`
  margin-bottom: 0.5em;
`;

export const TextArea = styled.textarea`
  font-size: 1em;
  padding: 1em;
  background-color: ${brandColors.lightGrey};
  border: 0.1em solid transparent;
  border-radius: 0.25em;
  color: ${brandColors.darkGrey};
  height: 8em;
  line-height: 1.5em;
  width: 100%;
  max-width: 100%;
  ${props =>
    props.hasError &&
    `
      border-color: ${brandColors.red};
  `}
`;
