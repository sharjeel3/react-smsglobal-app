import styled from 'styled-components';
import { Container } from '../../ui-library/Container';
import { aboveMedia } from '../../ui-library/media';

export const Wrapper = styled(Container)`
  ${aboveMedia('lg')`
    display: flex;
  `}
`;

export const Column = styled(Container)`
  ${aboveMedia('lg')`
    flex-basis: 50%;
    padding: 0 1em;
    margin-top: 0;
  `}
`;
