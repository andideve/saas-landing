import React from 'react';
import { Paragraph } from '@andideve/ids-react';
import styled from '@emotion/styled';

import NavBrand from '../../navbar/brand';
import { BrandProps } from './types';

const Root = styled.div`
  svg {
    color: var(--g-color-system-accent);
  }
`;

function Brand({ Logo, name, description }: BrandProps) {
  return (
    <Root>
      <NavBrand Logo={Logo} name={name} />
      <Paragraph mt={{ _: '.75rem', 2: '2rem' }} size="lg" className="color-secondary">
        {description}
      </Paragraph>
    </Root>
  );
}

export { Brand };
export * from './types';
export default Brand;
