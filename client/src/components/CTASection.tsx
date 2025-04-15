import React from 'react';
import { Link } from 'wouter';
import Container from './Container';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-primary">
      <Container className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Your Property Appraised?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Contact PNP Appraisal Inc. today for accurate, professional property appraisals throughout the Greater Toronto Area.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition duration-150 ease-in-out"
          >
            Contact Us
          </Link>
          <a 
            href="tel:+14168756515" 
            className="bg-[#D97706] hover:bg-[#F59E0B] text-white px-8 py-3 rounded-md font-semibold transition duration-150 ease-in-out"
          >
            Call (416) 875-6515
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
