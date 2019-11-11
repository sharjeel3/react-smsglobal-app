import React from 'react';
import { navigationRoutes } from '../../constants/routesMap';
import { StyledLi, StyledLink, StyledUl } from './styles';
import { NavButton } from './NavButton';
import { useNavigationHook } from '../../hooks/Navigation';

export const Navigation = () => {
  const { toggleNav, isNavOpen, activePath } = useNavigationHook();

  return (
    <nav>
      <NavButton onClick={toggleNav} />
      <StyledUl isOpen={isNavOpen}>
        {navigationRoutes.map((navItem, ii) => {
          const { title, path } = navItem;
          const isActive = path === activePath;
          return (
            <StyledLi key={`${title}${ii}`}>
              <StyledLink isActive={isActive} to={path}>
                {title}
              </StyledLink>
            </StyledLi>
          );
        })}
      </StyledUl>
    </nav>
  );
};
