import React from 'react';
import { Box, Image, Heading, Paragraph, media } from '@andideve/ids-react';
import styled from '@emotion/styled';

export const BenefitList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  li:not(:first-of-type) {
    margin-top: var(--spacing, 1rem);
  }
  ${media('lg')} {
    --spacing: 2.75rem;
  }
`;

export function BenefitItem({
  iconUrl,
  title,
  description,
}: {
  iconUrl: string;
  title: string;
  description: string;
}) {
  return (
    <li className="flex">
      <Image
        ratio={1}
        alt={title}
        width={50}
        height={50}
        src={iconUrl}
        className="rounded-xl"
        sx={{
          height: '100%',
          maxWidth: 32,
          [media('lg')]: { maxWidth: 50 },
        }}
      />
      <Box ml={{ _: '.75rem', 2: '2rem' }}>
        <Heading as="h3" size="2xl" fontWeight="semibold">
          {title}
        </Heading>
        <Paragraph mt=".75rem" className="color-secondary">
          {description}
        </Paragraph>
      </Box>
    </li>
  );
}
