import styled from 'styled-components';
import { brandColors } from '../brand/colors';

export const StyledCard = styled.div`
  background-color: ${brandColors.lightGrey};
  padding: 1.5em 2.5em 1.5em 1.5em;
  border-radius: 0.5em;
  margin-bottom: 1.5em;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
`;
