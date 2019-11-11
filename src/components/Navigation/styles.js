import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { brandColors } from '../../ui-library/brand/colors';
import { belowMedia } from '../../ui-library/media';

export const StyledUl = styled.ul`
  transition: max-height 0.1s;
  ${belowMedia('md')`
    max-height: 0;
    overflow: hidden;
    ${props =>
      props.isOpen &&
      `
      max-height: 100em;
      border-bottom: 1px solid ${brandColors.grey};
    `}
  `}
`;

export const StyledLi = styled.li``;

// A new component is created to avoid passing isActive to Link
export const StyledLink = styled(({ isActive, ...rest }) => <Link {...rest} />)`
  padding: 1em;
  display: block;
  text-align: center;
  font-size: 1em;
  color: ${brandColors.darkGrey};
  ${props =>
    props.isActive &&
    `
    background-color: ${brandColors.green};
    color: ${brandColors.white};
    pointer-events: none;
  `}
`;
