import React from 'react';
import {
  Container,
  Box,
  BoxProps,
  Heading,
  Paragraph,
  Text,
  ContainerSizes,
} from '@andideve/ids-react';

import Head from './Head';

import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';

import Logo from '../../components/atoms/icons/Logo';

import {
  FRAME_X,
  NAVBAR_HEIGHTS,
  NAVBAR_LG_HEIGHTS,
  SECTION_SPACE,
  SECTION_LG_SPACE,
} from '../../config/globals';

import { siteMetadata } from '../../_data/app/site-metadata';
import { siteMenu } from '../../_data/app/site-menu';
import { footerLinks, generalLinks } from '../../_data/app/footer-links';

const Header = Box.withComponent('header');

export function Section({
  children,
  containerSize,
  containerClass,
  ...rest
}: Omit<BoxProps, 'px'> & { containerSize?: ContainerSizes; containerClass?: string }) {
  return (
    <Box as="section" py={{ _: SECTION_SPACE, 2: SECTION_LG_SPACE }} px={FRAME_X} {...rest}>
      <Container maxWidth={containerSize} className={containerClass}>
        {children}
      </Container>
    </Box>
  );
}

Section.defaultProps = { containerSize: undefined, containerClass: undefined };

export function SectionHead({
  title,
  category,
  description,
  children,
  ...rest
}: { title: string; category?: string; description?: string } & BoxProps) {
  return (
    <Header {...rest}>
      {category && (
        <Text
          mb={{ _: '0.375rem', 2: '.75rem' }}
          size="xl"
          fontWeight="semibold"
          className="category block color-primary"
          sx={{ textTransform: 'uppercase' }}
        >
          {category}
        </Text>
      )}
      <Heading size="4xl" fontWeight="bold">
        <span style={{ fontSize: '1.11111em' }}>{title}</span>
      </Heading>
      {description && (
        <Paragraph mt={{ _: '.75rem', 2: '1.5rem' }} size="xl" className="color-secondary">
          {description}
        </Paragraph>
      )}
      {children}
    </Header>
  );
}

SectionHead.defaultProps = { category: undefined, description: undefined };

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head title={siteMetadata.title} />
      <header>
        <h1 className="sr-only">{siteMetadata.title}</h1>
        <Navbar brand={{ Logo, name: siteMetadata.title }} menuItems={siteMenu} />
        <Box h={{ _: NAVBAR_HEIGHTS, 2: NAVBAR_LG_HEIGHTS }} />
      </header>
      <main>{children}</main>
      <Footer
        brand={{ Logo, name: siteMetadata.title, description: siteMetadata.description }}
        links={footerLinks}
        generalLinks={generalLinks}
        copy="Made with ♥ by @andideve"
      />
    </>
  );
}
