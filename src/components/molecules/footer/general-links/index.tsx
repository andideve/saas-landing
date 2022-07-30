import NextLink from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Text, media } from '@andideve/ids-react';

import { Link } from '../../../../types/defaults';

const Anchor = Text.withComponent('a');

const List = styled.ul`
  --spacing: 2rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  li {
    position: relative;
    &:not(:first-of-type) {
      margin-top: var(--spacing);
    }
  }
  ${media('lg')} {
    flex-wrap: wrap;
    flex-direction: row;
    li:not(:first-of-type) {
      margin: 0;
      &:before {
        content: '|';
        margin: 0 var(--spacing);
      }
    }
  }
`;

function Item({ label, to, external }: Link) {
  return (
    <li>
      <NextLink href={to} passHref>
        <Anchor
          size="lg"
          fontWeight="semibold"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </Anchor>
      </NextLink>
    </li>
  );
}

function GeneralLinks({ items }: { items: Link[] }) {
  return (
    <List>
      {items.map((link) => (
        <Item key={link.to} label={link.label} to={link.to} />
      ))}
    </List>
  );
}

export { GeneralLinks };
export default GeneralLinks;
