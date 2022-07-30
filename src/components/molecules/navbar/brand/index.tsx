import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { Text, media } from '@andideve/ids-react';

import { BrandProps } from './types';

const Anchor = styled.a`
  --i-size: 1.5rem;
  svg {
    margin-right: var(--i-space, 0.625rem);
    width: var(--i-size);
    height: var(--i-size);
  }
  ${media('lg')} {
    --i-size: 2rem;
    --i-space: 0.875rem;
  }
`;

function Brand({ Logo, name }: BrandProps) {
  return (
    <Link href="/" passHref>
      <Anchor className="inline-flex items-center">
        <Logo role="img" aria-label="company logo" />
        <Text size="2xl" fontWeight="bold" className="company-name">
          {name}
        </Text>
      </Anchor>
    </Link>
  );
}

export { Brand };
export * from './types';
export default Brand;
