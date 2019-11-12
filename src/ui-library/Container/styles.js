import styled from 'styled-components';
import { aboveMedia } from '../media';

export const StyledContainer = styled.div`
  padding: 0 1em;
  margin: auto;
  ${aboveMedia('md')`
    max-width: 768px;
  `}
  ${aboveMedia('lg')`
    max-width: 992px;
  `}
  ${aboveMedia('xlg')`
    max-width: 1140px;
  `}
`;
