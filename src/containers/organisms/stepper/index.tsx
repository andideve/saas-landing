import React from 'react';
import styled from '@emotion/styled';
import { Box, Text, media } from '@andideve/ids-react';

const NUMBER_SIZE = '2rem';
const NUMBER_LG_SIZE = '3rem';

export const StepperList = styled.ol`
  &,
  li {
    --spacing: 2.5rem;
    --i-size: 2rem;
    --border-width: 2px;
  }
  list-style: none;
  li {
    position: relative;
    &:not(:first-of-type) {
      margin-top: var(--spacing);
      &:before {
        position: absolute;
        content: '';
        bottom: 100%;
        left: calc((var(--i-size) / 2) - (var(--border-width) / 2));
        width: var(--border-width);
        height: var(--spacing);
        background-color: var(--color-white);
      }
    }
  }
  li.completed:not(:first-of-type):before {
    background-color: var(--g-color-system-accent);
  }
  ${media('lg')} {
    &,
    li {
      --i-size: 3rem;
    }
  }
`;

const Number = styled.span`
  --size: ${NUMBER_SIZE};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  border-radius: 999px;
  color: var(--color-black);
  background-color: var(--color-white);
  z-index: 1;
  li.completed & {
    color: var(--color-white);
    background-color: var(--g-color-system-accent);
  }
  ${media('lg')} {
    --size: ${NUMBER_LG_SIZE};
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
`;

export function StepperItem({
  completed,
  index,
  description,
}: {
  index: number;
  description: string;
  completed?: boolean;
}) {
  return (
    <Box
      as="li"
      display="grid"
      gridTemplateColumns={{ _: `${NUMBER_SIZE} auto`, 2: `${NUMBER_LG_SIZE} auto` }}
      className={completed ? 'completed' : undefined}
    >
      <Number>{index}</Number>
      <Text
        ml={{ _: '.75rem', 2: '1rem' }}
        size="xl"
        fontWeight="medium"
        sx={{ alignSelf: 'center' }}
      >
        {description}
      </Text>
    </Box>
  );
}

StepperItem.defaultProps = { completed: undefined };
