import React from 'react';
import { Link } from 'wouter';
import Container from './Container';

const About: React.FC = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '2,000+', label: 'Properties Appraised' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '100+', label: 'Business Clients' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[#D97706] font-medium">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-6">About PNP Appraisal Inc.</h2>
            <p className="text-[#374151] mb-4">
              With over 15 years of experience in property appraisal across the Greater Toronto Area, 
              PNP Appraisal Inc. has built a reputation for delivering accurate, timely, and professional 
              valuation services.
            </p>
            <p className="text-[#374151] mb-6">
              As certified appraisers with extensive knowledge of Toronto's diverse real estate market, 
              our team combines industry expertise with a commitment to personalized service. From residential 
              homes to commercial properties, our comprehensive understanding of local market trends ensures 
              reliable valuations that clients can trust.
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
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#D97706] rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                alt="Prakash Panchal, Property Appraiser" 
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
