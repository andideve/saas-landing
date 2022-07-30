import React from 'react';
import { GridContainer, Box, Image, Heading, Paragraph, media } from '@andideve/ids-react';

interface UserProps {
  name: string;
  description: string;
  avatarUrl: string;
}

function User({ name, description, avatarUrl }: UserProps) {
  return (
    <Box gridTemplateColumns={{ _: '58px auto', 2: '70px auto' }} className="grid items-center">
      <Image
        ratio={1}
        alt={name}
        width={70}
        src={avatarUrl}
        className="rounded-xl"
        sx={{ maxWidth: 58, [media('lg')]: { maxWidth: 70 } }}
      />
      <Box ml={{ _: '.75rem', 2: '1.5rem' }}>
        <Paragraph size="lg" fontWeight="bold">
          {name}
        </Paragraph>
        <Paragraph mt={{ _: '0.25rem', 2: 0 }} size="sm">
          {description}
        </Paragraph>
      </Box>
    </Box>
  );
}

export function TestimonialList({ children }: { children: React.ReactNode }) {
  return (
    <GridContainer
      as="ul"
      sx={{ listStyle: 'none', rowGap: '2rem', li: { gridColumn: 'auto/span 4' } }}
    >
      {children}
    </GridContainer>
  );
}

export function TestimonialItem({
  title,
  review,
  user,
}: {
  title: string;
  review: string;
  user: UserProps;
}) {
  return (
    <Box
      as="li"
      p={{ _: '1.5rem', 2: '2rem' }}
      className="flex flex-col rounded-xl"
      sx={{ backgroundColor: 'var(--color-system-background-secondary)' }}
    >
      <div className="grow">
        <Heading as="h3" size="lg" fontWeight="semibold">
          {title}
        </Heading>
        <Paragraph as="blockquote" mt={{ _: '1.125rem', 2: '1rem' }} fontWeight="medium">
          {review}
        </Paragraph>
      </div>
      <Box as="hr" mt={{ _: '1.5rem', 2: '2.125rem' }} mb={{ _: '1.5rem', 2: '2rem' }} />
      <User {...user} />
    </Box>
  );
}
