import React from 'react';
import styled from '@emotion/styled';
import { GridContainer, media } from '@andideve/ids-react';

export const LinkSectionStack = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
  ${media('lg')} {
    display: flex;
    flex-wrap: wrap;
    section {
      flex: 1;
    }
  }
`;

export function BrandNLinksGrid({
  brand,
  links,
}: {
  brand: React.ReactNode;
  links: React.ReactNode;
}) {
  return (
    <GridContainer
      sx={{
        '.BrandNLinksGrid__Brand': { gridColumn: '1/-1' },
        '.BrandNLinksGrid__Links': { gridColumn: '1/-1', marginTop: '3rem' },
        [media('lg')]: {
          '.BrandNLinksGrid__Brand': { gridColumn: '1/span 2' },
          '.BrandNLinksGrid__Links': { gridColumn: '4/-1', margin: 0 },
        },
      }}
    >
      <div className="BrandNLinksGrid__Brand">{brand}</div>
      <div className="BrandNLinksGrid__Links">{links}</div>
    </GridContainer>
  );
}
