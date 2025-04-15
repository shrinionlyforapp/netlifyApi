import React from 'react';
import { Link } from 'wouter';
import Container from './Container';

const About: React.FC = () => {
  const stats = [
    { value: '8+', label: 'Years Experience' },
    { value: '1,000+', label: 'Properties Appraised' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Business Clients' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[#D97706] font-medium">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-6">About PNP Appraisal Inc.</h2>
            <p className="text-[#374151] mb-4">
              PNP Appraisal Inc. is led by Prakashkumar Panchal, a designated Canadian Residential Appraiser (CRA) 
              with the Appraisal Institute of Canada. With extensive experience in residential property valuation, 
              we serve the Greater Toronto Area with professional and reliable appraisal services.
            </p>
            <p className="text-[#374151] mb-4">
              As a certified residential appraiser, we specialize in property valuations for mortgages, refinancing, 
              private sales, estate planning, divorce settlements, and other legal matters. Our expertise covers 
              single-family homes, condominiums, townhouses, and multi-family properties.
            </p>
            <p className="text-[#374151] mb-6">
              With a client base that includes major banks, private lenders, mortgage brokers, buyers, sellers, and lawyers, 
              Prakash brings his extensive experience, industry expertise, and analytical abilities to every appraisal project, 
              delivering accurate and reliable valuations you can trust.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-primary text-3xl font-bold">{stat.value}</div>
                  <div className="text-[#374151]">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap space-x-4">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-[#1e3a8a] text-white px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out"
              >
                Contact Us
              </Link>
              <Link 
                href="/about" 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out"
              >
                View Credentials
              </Link>
              <a 
                href="https://ca.linkedin.com/in/prakash-panchal-53111846" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-primary hover:text-primary/80 mt-4"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#D97706] rounded-lg"></div>
              <img 
                src="/assets/prakash-profile.jpg" 
                alt="Prakashkumar Panchal, P.App., CRA - Professional Property Appraiser" 
                className="rounded-lg shadow-xl w-full h-auto object-cover" 
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
