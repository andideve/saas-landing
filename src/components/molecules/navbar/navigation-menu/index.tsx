import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Text } from '@andideve/ids-react';

import { Menu } from '../../../../types/defaults';

const Anchor = Text.withComponent('a');

const List = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    &:hover {
      background-color: var(--color-system-background-secondary);
    }
  }
`;

function Item({ label, to }: Menu) {
  return (
    <li className="relative flex items-center h-full">
      <Link href={to} passHref>
        <Anchor size="lg" fontWeight="medium" className="overlay--after">
          {label}
        </Anchor>
      </Link>
    </li>
  );
}

function NavigationMenu({ items, className }: { items: Menu[]; className?: string }) {
  return (
    <List className={className}>
      {items.map((menu) => (
        <Item key={menu.to} label={menu.label} to={menu.to} />
      ))}
    </List>
  );
}

NavigationMenu.defaultProps = { className: undefined };

export { NavigationMenu };
export default NavigationMenu;
