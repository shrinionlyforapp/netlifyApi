import React from 'react';
import { Link } from 'wouter';
import Container from './Container';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-[#1e3a8a] text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Container className="py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">Toronto's Premier Property Appraisal Services</h1>
            <p className="text-xl mb-8 text-gray-100">Professional, accurate, and trusted property valuations by PNP Appraisal Inc., serving the Greater Toronto Area.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out">
                Our Services
              </Link>
              <Link href="/contact" className="bg-[#D97706] hover:bg-[#F59E0B] text-white px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out">
                Request an Appraisal
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-[#D97706] rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80" 
                alt="Luxury home in Toronto" 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,186.7C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
