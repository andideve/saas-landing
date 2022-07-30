import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import {
  Container,
  GridContainer,
  Box,
  Heading,
  Text,
  Paragraph,
  ButtonAnchor,
  Image,
  Button,
  media,
} from '@andideve/ids-react';
import styled from '@emotion/styled';

import Page, { Section, SectionHead } from '../containers/templates/Page';

import { BenefitList, BenefitItem } from '../containers/organisms/benefit';
import { StepperList, StepperItem } from '../containers/organisms/stepper';
import { AdvantageList, AdvantageItem } from '../containers/organisms/advantage';
import { TestimonialList, TestimonialItem } from '../containers/organisms/testimonial';
import { PlanList, PlanItem } from '../containers/organisms/plan';

import Toggle from '../components/molecules/toggle';

import useToggle from '../hooks/use-toggle';

import { SITE_PATHS, FRAME_X, SECTION_LG_SPACE } from '../config/globals';

function BenefitGrid({ text, image }: { text: React.ReactNode; image: React.ReactNode }) {
  return (
    <GridContainer
      sx={{
        '.BenefitGrid__Column--text': { gridColumn: '1/-1' },
        '.BenefitGrid__Column--image': { gridColumn: '1/-1', marginTop: '2rem' },
        [media('lg')]: {
          '.BenefitGrid__Column--text': { gridColumn: '1/span 5', maxWidth: 497 },
          '.BenefitGrid__Column--image': { gridColumn: '6/-1', margin: 0, textAlign: 'right' },
        },
      }}
    >
      <div className="BenefitGrid__Column--text">{text}</div>
      <div className="BenefitGrid__Column--image">{image}</div>
    </GridContainer>
  );
}

function HowItWorksGrid({ text, image }: { text: React.ReactNode; image: React.ReactNode }) {
  return (
    <GridContainer
      sx={{
        '.HowItWorksGrid__Column--text': { gridColumn: '1/-1' },
        '.HowItWorksGrid__Column--image': { gridColumn: '1/-1', marginTop: '2rem' },
        [media('lg')]: {
          '.HowItWorksGrid__Column--text': { gridColumn: '8/-1' },
          '.HowItWorksGrid__Column--image': { gridRowStart: 1, gridColumn: '1/span 7', margin: 0 },
        },
      }}
    >
      <div className="HowItWorksGrid__Column--text">{text}</div>
      <div className="HowItWorksGrid__Column--image">{image}</div>
    </GridContainer>
  );
}

function SuccessStoriesGrid({ text, image }: { text: React.ReactNode; image: React.ReactNode }) {
  return (
    <GridContainer
      sx={{
        '.SuccessStoriesGrid__Column--text': { gridColumn: '1/-1' },
        '.SuccessStoriesGrid__Column--image': { gridColumn: '1/-1', marginTop: '4rem' },
        [media('lg')]: {
          '.SuccessStoriesGrid__Column--text': { gridColumn: '1/span 6', maxWidth: 634 },
          '.SuccessStoriesGrid__Column--image': {
            gridColumn: '7/-1',
            margin: 0,
            alignSelf: 'flex-end',
          },
        },
      }}
    >
      <div className="SuccessStoriesGrid__Column--text">{text}</div>
      <div className="SuccessStoriesGrid__Column--image">{image}</div>
    </GridContainer>
  );
}

const DiscountBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  height: 2rem;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 500;
  border-radius: 999px;
  background-color: var(--color-system-background-secondary);
`;

const sections = {
  hero: (
    <Section sx={{ [media('lg')]: { textAlign: 'center' } }}>
      <Container maxWidth="md">
        <header>
          <Heading size="7xl" fontWeight="bold">
            All your business expenses in one place.
          </Heading>
        </header>
        <Paragraph mt={{ _: '.75rem', 2: '1.5rem' }} size="2xl" className="color-secondary">
          Your one-stop finance empower platform.
          <br />
          Manage all your business expenses with our supafast app.
        </Paragraph>
        <footer>
          <Box
            mt={{ _: '2rem', 2: '2.5rem' }}
            flexDirection={{ _: 'column', 2: 'row' }}
            className="flex justify-center"
            sx={{
              'a:not(:first-of-type)': { marginTop: '1.5rem' },
              [media('lg')]: {
                'a:not(:first-of-type)': { margin: 0, marginLeft: '1.5rem' },
              },
            }}
          >
            <Link href={SITE_PATHS.DEMO} passHref>
              <ButtonAnchor variant="filled" size="xl" rounded="full">
                Get a Free Demo
              </ButtonAnchor>
            </Link>
            <ButtonAnchor variant="gray" size="xl" rounded="full" href="#pricing">
              See Pricing
            </ButtonAnchor>
          </Box>
        </footer>
      </Container>
    </Section>
  ),
  benefit: (
    <Section id="benefit">
      <Container maxWidth="md" sx={{ [media('lg')]: { textAlign: 'center' } }}>
        <SectionHead
          mb={{ _: '2rem', 2: '4rem' }}
          category="Why use Spend.In"
          title="Easy, Simple, Affordable"
          description="Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances."
        />
      </Container>
      <BenefitGrid
        text={
          <BenefitList>
            <BenefitItem
              iconUrl="/assets/images/icons/Frame 33671.svg"
              title="Automatic Invoice Payment"
              description="Automatic payments help you to arrange payments on a certain date without doing it manually again."
            />
            <BenefitItem
              iconUrl="/assets/images/icons/Frame 33672.svg"
              title="Clear payment history"
              description="Clear payment history helps you to track your business expenses on specific dates."
            />
            <BenefitItem
              iconUrl="/assets/images/icons/Frame 33673.svg"
              title="Use of multi-card payments"
              description="Have more than one debit or credit card? Don't worry, we support payments using more than one card."
            />
          </BenefitList>
        }
        image={
          <Image
            ratio={608 / 413}
            alt="benefit"
            width={608}
            src="/assets/images/sections/benefit.svg"
            className="rounded-xl"
            sx={{ maxWidth: 608 }}
          />
        }
      />
    </Section>
  ),
  howItWorks: (
    <Section id="how-it-works">
      <HowItWorksGrid
        image={
          <Image
            ratio={588 / 536}
            alt="how it works"
            width={588}
            src="/assets/images/sections/how-it-works.svg"
            className="rounded-xl"
            sx={{ maxWidth: 588 }}
          />
        }
        text={
          <>
            <SectionHead
              mb="2rem"
              category="How it Works"
              title="Few Easy Steps and Done"
              description="In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place."
              sx={{ maxWidth: 510 }}
            />
            <Box
              p={{ _: '1.125rem 0.625rem', 2: '2rem' }}
              className="rounded-xl"
              sx={{ backgroundColor: 'var(--color-system-background-secondary)' }}
            >
              <StepperList>
                <StepperItem index={1} description="Register your Spend.In account." completed />
                <StepperItem
                  index={2}
                  description="Fill in the list of your business expenses."
                  completed
                />
                <StepperItem index={3} description="Done, let's continue the work." />
              </StepperList>
            </Box>
          </>
        }
      />
    </Section>
  ),
  successStories: (
    <Section id="success-stories">
      <SuccessStoriesGrid
        text={
          <>
            <SectionHead
              mb={{ _: '2rem', 2: '3rem' }}
              category="Increase Productivity"
              title="Reduce Time in Doing Manual Work Managing Expenses"
            >
              <Box
                as="form"
                p=".125rem"
                mt={{ _: '2rem', 2: '4rem' }}
                className="inline-block rounded-full"
                sx={{ backgroundColor: 'var(--color-system-background-secondary)' }}
              >
                <Button as="label" size="xl" variant="filled" rounded="full" className="relative">
                  With Spend.In
                  <input
                    type="radio"
                    name="comparison"
                    className="overlay rounded-full"
                    defaultChecked
                    style={{ appearance: 'none' }}
                  />
                </Button>
                <Button as="label" size="xl" variant="plain" rounded="full" className="relative">
                  Without Spend.In
                  <input
                    type="radio"
                    name="comparison"
                    className="overlay rounded-full"
                    style={{ appearance: 'none' }}
                  />
                </Button>
              </Box>
            </SectionHead>
            <Box maxW={526}>
              <Paragraph mb="2rem" size="2xl" fontWeight="bold">
                Track Business Expenses until its Milisecond
              </Paragraph>
              <AdvantageList>
                <AdvantageItem description="Analyze your business cost easily with group transaction thorugh tagging feature." />
                <AdvantageItem description="Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment." />
                <AdvantageItem description="Arrange your business expenses by date, name, etc.,  with just one click." />
              </AdvantageList>
            </Box>
          </>
        }
        image={
          <Image
            ratio={486 / 434}
            width={486}
            src="/assets/images/sections/success-stories.svg"
            className="rounded-xl"
            sx={{ marginLeft: 'auto', maxWidth: 486 }}
          />
        }
      />
    </Section>
  ),
  testimonials: (
    <Section id="testimonials">
      <Container maxWidth="md">
        <SectionHead
          mb={{ _: '2rem', 2: '4rem' }}
          category="What They Say"
          title="Our User Kind Words"
          description="Here are some testimonials from our user after using Spend.In to manage their business  expenses."
          sx={{ [media('lg')]: { textAlign: 'center' } }}
        />
      </Container>
      <TestimonialList>
        <TestimonialItem
          title="It's just incredible!"
          review="It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!"
          user={{
            name: 'Jimmy Bartney',
            description: 'Product Manager at Picko Lab',
            avatarUrl: '/assets/images/users/Jimmy Bartney.png',
          }}
        />
        <TestimonialItem
          title="Satisfied User Here!"
          review="Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!"
          user={{
            name: 'Natasha Romanoff',
            description: 'Black Widow',
            avatarUrl: '/assets/images/users/Natasha Romanoff.png',
          }}
        />
        <TestimonialItem
          title="No doubt, Spend.In is the best!"
          review="“The best”! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!"
          user={{
            name: 'Moritika Kazuki',
            description: 'Finance Manager at Mangan',
            avatarUrl: '/assets/images/users/Moritika Kazuki.png',
          }}
        />
      </TestimonialList>
    </Section>
  ),
  pricing: ({ yearlyToggle }: { yearlyToggle: ReturnType<typeof useToggle> }) => (
    <Section id="pricing">
      <Container maxWidth="md" className="text-center">
        <SectionHead
          mb={{ _: '1.875rem', 2: '4rem' }}
          title="Ready to Get Started?"
          description="Choose a plan that suits your business needs"
        />
        <form className="inline-flex items-center justify-center">
          <Text size="xl" fontWeight="semibold">
            Montly
          </Text>
          <Box mx="1rem" className="inline-flex">
            <Toggle
              label="Set to Yearly and get save 65%"
              name="yearly"
              checked={yearlyToggle.checked}
              onChange={yearlyToggle.onChange}
            />
          </Box>
          <Text size="xl" fontWeight="semibold">
            Yearly
          </Text>
        </form>
        <Box mt="1.5rem" className="relative">
          <DiscountBadge>Save 65%</DiscountBadge>
          <Image
            ratio={75 / 72}
            alt="discount arrow"
            width={75}
            src="/assets/images/sections/pricing-discount-arrow.svg"
            className="absolute"
            sx={{ display: 'inline-block', top: '-2rem', maxWidth: 75 }}
          />
        </Box>
      </Container>
      <Box h={{ _: '2.625rem', 2: '2rem' }} />
      <PlanList>
        <PlanItem
          iconUrl="/assets/images/icons/lovely.svg"
          title="Free"
          subhead="Perfect plan to get started"
          pricePerMonth="$0"
          description="A free plan grants you access to some cool features of Spend.In."
          features={[
            { checked: true, label: 'Sync accross device' },
            { checked: true, label: '5 workspace' },
            { checked: true, label: 'Collaborate with 5 user' },
            { checked: false, label: 'Sharing permission' },
            { checked: false, label: 'Admin tools' },
            { checked: false, label: '100+ integrations' },
          ]}
          button={{ label: 'Get Your Free Plan' }}
        />
        <PlanItem
          iconUrl="/assets/images/icons/crown.svg"
          title="Pro"
          subhead="Perfect plan for professionals!"
          pricePerMonth="$12"
          description="For professional only! Start arranging your expenses with our best templates."
          features={[
            { checked: true, label: 'Everything in Free Plan' },
            { checked: true, label: 'Unlimited workspace' },
            { checked: true, label: 'Collaborative workspace' },
            { checked: true, label: 'Sharing permission' },
            { checked: true, label: 'Admin tools' },
            { checked: true, label: '100+ integrations' },
          ]}
          button={{ label: 'Get Started' }}
        />
        <PlanItem
          iconUrl="/assets/images/icons/flash.svg"
          title="Ultimate"
          subhead="Best suits for great company!"
          pricePerMonth="$33"
          description="If you a finance manager at big  company, this plan is a perfect match."
          features={[
            { checked: true, label: 'Everything in Pro Plan' },
            { checked: true, label: 'Daily performance reports' },
            { checked: true, label: 'Dedicated assistant' },
            { checked: true, label: 'Artificial intelligence' },
            { checked: true, label: 'Marketing tools & automations' },
            { checked: true, label: 'Advanced security' },
          ]}
          button={{ label: 'Get Started' }}
        />
      </PlanList>
    </Section>
  ),
  cta: (
    <Section id="cta" containerClass="relative">
      <Box maxW={568}>
        <SectionHead
          mb="2rem"
          category="Download Now!"
          title="Start Track Your Business Expenses Today"
          description="Are you ready to make your business more organized? Download Spend.In now!"
        />
        <Link href={SITE_PATHS.DEMO} passHref>
          <ButtonAnchor variant="filled" size="xl" rounded="full">
            Get a Free Demo
          </ButtonAnchor>
        </Link>
      </Box>
      <Image
        ratio={708 / 450}
        alt="cta"
        width={708}
        src="/assets/images/sections/cta.svg"
        sx={({ theme }) => ({
          marginTop: '4.5rem',
          width: `calc(100% + ${FRAME_X})`,
          borderTopLeftRadius: theme.radii.xl,
          [media('lg')]: {
            position: 'absolute',
            margin: 0,
            right: `-${FRAME_X}`,
            bottom: `-${SECTION_LG_SPACE}`,
            width: '100%',
            maxWidth: 708,
          },
        })}
      />
    </Section>
  ),
};

const Home: NextPage = () => {
  const yearlyToggle = useToggle(true);
  return (
    <Page>
      {sections.hero}
      {sections.benefit}
      {sections.howItWorks}
      {sections.successStories}
      {sections.testimonials}
      {sections.pricing({ yearlyToggle })}
      {sections.cta}
    </Page>
  );
};

export default Home;
