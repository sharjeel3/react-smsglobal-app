import styled from 'styled-components';
import { brandColors } from '../brand/colors';

export const Root = styled.div`
  margin-bottom: 0.5em;
`;

export const Select = styled.select`
  width: 100%;
  max-width: 100%;
  height: 4em;
  line-height: 4em;
  padding: 0 1em;
  font-weight: normal;
  font-size: 1em;
  display: block;
  color: ${brandColors.darkGrey};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 7L0.937822 0.25L13.0622 0.250001L7 7Z' fill='%2322AA4E'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 1em top 50%, 0 0;
  background-size: 1em 0.5em;
  background-color: ${brandColors.lightGrey};
  border: 0.1em solid transparent;
  border-radius: 0.25em;
  appearance: none;
  margin: 0;
  ${props =>
    props.hasError &&
    `
    border-color: ${brandColors.red};
  `}
  &::-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
  }
  option {
    font-weight: normal;
  }
`;
