import NextLink from 'next/link';
import React from 'react';
import styled from '@emotion/styled';

import { Link } from '../../../../types/defaults';

const List = styled.ul`
  list-style: none;
  li:not(:first-of-type) {
    margin-top: 1.5rem;
  }
`;

function Item({ label, to, external }: Link) {
  return (
    <li>
      <NextLink href={to}>
        <a
          href={to}
          className="color-secondary--hoverable"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      </NextLink>
    </li>
  );
}

function Links({ items }: { items: Link[] }) {
  return (
    <List>
      {items.map((link) => (
        <Item key={link.to} label={link.label} to={link.to} external={link.external} />
      ))}
    </List>
  );
}

export { Links };
export default Links;
