import React from 'react';
import styled from '@emotion/styled';
import { Box, Paragraph } from '@andideve/ids-react';

import SVGTickCircle from '../../../components/atoms/icons/TickCircle';

export const AdvantageList = styled.ul`
  list-style: none;
  li:not(:first-of-type) {
    margin-top: 2rem;
  }
`;

export function AdvantageItem({ description }: { description: string }) {
  return (
    <Box
      as="li"
      gridTemplateColumns="1.5rem auto"
      className="grid"
      sx={{ svg: { width: '1.5rem', height: '1.5rem' } }}
    >
      <SVGTickCircle role="checkbox" aria-checked />
      <Paragraph ml=".75rem" size="lg" fontWeight="medium">
        {description}
      </Paragraph>
    </Box>
  );
}
