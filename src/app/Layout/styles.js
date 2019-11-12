import styled from 'styled-components';
import { aboveMedia, belowMedia } from '../../ui-library/media';
import { Container } from '../../ui-library/Container';
import { brandColors } from '../../ui-library/brand/colors';

export const Wrapper = styled(Container)`
  position: relative;
  ${belowMedia('md')`
    padding-left: 0;
    padding-right: 0;
  `}
  ${aboveMedia('md')`
    display: flex;
    min-height: calc(100vh - 5em);
  `}
`;

export const Content = styled.div`
  padding: 2em 0;
  ${aboveMedia('md')`
    padding: 2em 1em;
    flex-basis: 75%;
  `}
`;

export const Aside = styled.div`
  ${aboveMedia('md')`
    flex-basis: 25%;
    padding: 2em 1em;
    background: ${brandColors.lightGrey2};
  `}
`;
