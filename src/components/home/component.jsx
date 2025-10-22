import React from 'react';
import {CTASection} from './cta-section';
import {FeaturesSection} from './features-section';
import {Header} from './header';
import {HeroSection} from './hero-section';
import {PricingSection} from './princing-section';
import {TestimonialsSection} from './testimoniais-section';
import {Footer} from './footer';
import {Stack, VStack} from '@chakra-ui/react';
import {Form} from './form';

export function Home() {
  return (
    <VStack spacing={0} align="stretch" minH="100dvh">
      <Header />

      <Stack as="main" flex="1" gap={12}>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <Form />
        <TestimonialsSection />
        <CTASection />
      </Stack>

      <Footer />
    </VStack>
  );
}
