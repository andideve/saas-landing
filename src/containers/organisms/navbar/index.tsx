import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Text, ButtonAnchor, media, Box } from '@andideve/ids-react';

import { Brand, NavigationMenu, ButtonList } from '../../../components/molecules/navbar';

import { SITE_PATHS, FRAME_X, NAVBAR_HEIGHTS, NAVBAR_LG_HEIGHTS } from '../../../config/globals';

import { NavbarProps } from './types';

const Anchor = Text.withComponent('a');

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: ${NAVBAR_HEIGHTS}px;
  padding: 0 ${FRAME_X};
  border-bottom: 1px solid var(--color-system-separator);
  background-color: var(--color-system-background);
  z-index: 999;
  ${media('lg')} {
    height: ${NAVBAR_LG_HEIGHTS}px;
  }
`;

export default function Navbar({ brand, menuItems }: NavbarProps) {
  const buttons = (
    <ButtonList>
      <li>
        <Link href={SITE_PATHS.LOGIN} passHref>
          <Anchor size="lg" fontWeight="medium">
            Login
          </Anchor>
        </Link>
      </li>
      <li>
        <Link href={SITE_PATHS.DEMO} passHref>
          <ButtonAnchor size="xl" rounded="full">
            Get Demo
          </ButtonAnchor>
        </Link>
      </li>
    </ButtonList>
  );
  return (
    <Nav className="flex items-center justify-between">
      <Brand {...brand} />
      <Box display={{ _: 'none', 2: 'block' }} zIndex={-1}>
        <NavigationMenu className="items-center justify-center overlay" items={menuItems} />
      </Box>
      <Box display={{ _: 'none', 2: 'block' }}>{buttons}</Box>
    </Nav>
  );
}
