import React from 'react';
import {
  GridContainer,
  Box,
  Image,
  Heading,
  Paragraph,
  Text,
  Button,
  media,
} from '@andideve/ids-react';
import styled from '@emotion/styled';

import SVGTickCircle from '../../../components/atoms/icons/TickCircle';
import SVGCloseCircle from '../../../components/atoms/icons/CloseCircle';

const FeatureList = styled.ul`
  list-style: none;
  li:not(:first-of-type) {
    margin-top: var(--spacing, 1.125rem);
  }
  ${media('lg')} {
    --spacing: 1.5rem;
  }
`;

interface Feature {
  label: string;
  checked?: boolean;
}

function FeatureItem({ checked, label }: Feature) {
  return (
    <Box
      as="li"
      className="flex items-center"
      sx={{
        '--i-size': '1.25rem',
        svg: { width: 'var(--i-size)', height: 'var(--i-size)' },
        [media('lg')]: { '--i-size': '1.5rem' },
      }}
    >
      {checked ? (
        <SVGTickCircle role="checkbox" aria-checked={checked} />
      ) : (
        <SVGCloseCircle
          role="checkbox"
          aria-checked={checked}
          style={{ color: 'var(--color-system-foreground-secondary)' }}
        />
      )}
      <Text ml=".75rem" size="lg" fontWeight="medium">
        {label}
      </Text>
    </Box>
  );
}

FeatureItem.defaultProps = { checked: undefined };

function Features({ items }: { items: Feature[] }) {
  return (
    <FeatureList>
      {items.map((feature, i) => (
        <FeatureItem key={i} checked={feature.checked} label={feature.label} />
      ))}
    </FeatureList>
  );
}

export function PlanList({ children }: { children: React.ReactNode }) {
  return (
    <GridContainer
      as="ul"
      sx={{ listStyle: 'none', rowGap: '2rem', li: { gridColumn: 'auto/span 4' } }}
    >
      {children}
    </GridContainer>
  );
}

export function PlanItem({
  iconUrl,
  title,
  subhead,
  pricePerMonth,
  description,
  features,
  button,
}: {
  iconUrl: string;
  title: string;
  subhead: string;
  pricePerMonth: string;
  description: string;
  features: Feature[];
  button: { label: string; onClick?(ev: React.MouseEvent<HTMLButtonElement>): void };
}) {
  return (
    <Box
      as="li"
      p={{ _: '1.5rem', 2: '2rem' }}
      className="rounded-xl"
      sx={{ backgroundColor: 'var(--color-system-background-secondary)' }}
    >
      <Box mb="1.5rem">
        <div className="flex items-center">
          <Image
            ratio={1}
            alt={title}
            width={32}
            src={iconUrl}
            sx={{ maxWidth: 24, [media('lg')]: { maxWidth: 32 } }}
          />
          <Heading ml={{ _: '.5rem', 2: '.75rem' }} size="3xl" fontWeight="semibold">
            <span style={{ fontSize: '1.066666em' }}>{title}</span>
          </Heading>
        </div>
        <Paragraph mt=".75rem" className="color-secondary">
          {subhead}
        </Paragraph>
      </Box>
      <div>
        <Paragraph className="flex items-center">
          <Text size="4xl" fontWeight="semibold">
            <span style={{ fontSize: '1.111111em' }}>{pricePerMonth}</span>
          </Text>
          <Text ml="0.625rem" size="lg" fontWeight="medium" className="color-secondary">
            /month
          </Text>
        </Paragraph>
        <Paragraph mt="1.5rem">{description}</Paragraph>
      </div>
      <Box mt={{ _: '1.5rem', 2: '2rem' }} mb="2.5rem">
        <Features items={features} />
      </Box>
      <Button variant="filled" size="xl" rounded="full" className="w-full" onClick={button.onClick}>
        {button.label}
      </Button>
    </Box>
  );
}
