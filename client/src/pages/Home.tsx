import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default Home;
