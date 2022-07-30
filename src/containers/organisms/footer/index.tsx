import React from 'react';
import styled from '@emotion/styled';
import { Box, Heading, Paragraph, media } from '@andideve/ids-react';

import { BrandNLinksGrid, LinkSectionStack } from './layouts';

import { Brand, BrandProps, Links, GeneralLinks } from '../../../components/molecules/footer';

import { FRAME_X, SECTION_SPACE, SECTION_LG_SPACE } from '../../../config/globals';

import { Link, LinkSection } from '../../../types/defaults';

const Root = styled.footer`
  padding: ${SECTION_SPACE} ${FRAME_X};
  background-color: var(--color-system-background);
  ${media('lg')} {
    padding-top: ${SECTION_LG_SPACE};
    padding-bottom: ${SECTION_LG_SPACE};
  }
`;

export default function Footer({
  brand,
  links,
  generalLinks,
  copy,
}: {
  brand: BrandProps;
  links?: LinkSection[];
  generalLinks?: Link[];
  copy?: string;
}) {
  return (
    <Root>
      <BrandNLinksGrid
        brand={<Brand {...brand} />}
        links={
          links && (
            <LinkSectionStack>
              {links.map((section) => (
                <section key={section.title}>
                  <header>
                    <Heading mb="2rem" size="xl" fontWeight="semibold">
                      {section.title}
                    </Heading>
                  </header>
                  <Links items={section.links} />
                </section>
              ))}
            </LinkSectionStack>
          )
        }
      />

      {(generalLinks || copy) && (
        <>
          <Box as="hr" mt={{ _: '2rem', 2: '4rem' }} mb="2rem" />
          <Box
            flexDirection={{ _: 'column', 2: 'row' }}
            alignItems={{ 2: 'center' }}
            justifyContent={{ 2: 'space-between' }}
            className="flex"
          >
            {generalLinks && <GeneralLinks items={generalLinks} />}
            {copy && (
              <Paragraph mt={{ _: '3rem', 2: 0 }} fontWeight="medium" className="color-secondary">
                {copy}
              </Paragraph>
            )}
          </Box>
        </>
      )}
    </Root>
  );
}

Footer.defaultProps = { links: undefined, generalLinks: undefined, copy: undefined };
