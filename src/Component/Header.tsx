import React from 'react';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';
import { motion } from 'framer-motion';

const HeaderWrapper = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  ${space}
  ${layout}
  ${color}
  ${typography}

  @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`;

const Nav = styled.nav`
  a {
    margin-left: ${({ theme }) => theme.spacing(2)};
    color: #fff;
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes[2]}px;

    @media (max-width: ${({ theme }) => theme.breakpoints[1]}) {
      margin-left: 0;
      margin-top: ${({ theme }) => theme.spacing(1)};
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Logo>Finance Manager</Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
