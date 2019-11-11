import { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';

export const useNavigationHook = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { location } = useReactRouter();

  const activePath = location.pathname;

  useEffect(() => {
    setIsNavOpen(false);
  }, [activePath]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return { toggleNav, isNavOpen, activePath };
};
