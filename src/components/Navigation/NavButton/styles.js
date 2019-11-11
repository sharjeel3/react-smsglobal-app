import styled from 'styled-components';
import { ChevronIcon } from '../../../ui-library/ChevronIcon';
import { brandColors } from '../../../ui-library/brand/colors';
import { aboveMedia } from '../../../ui-library/media';
import { Button } from '../../../ui-library/Button';

export const StyledChevronIcon = styled(ChevronIcon)`
  margin-left: 1em;
  path {
    fill: ${brandColors.darkGrey};
  }
`;

export const NavButtonRoot = styled(Button)`
  border-bottom: 1px solid ${brandColors.grey};
  ${aboveMedia('md')`
    display: none;
  `}
`;
