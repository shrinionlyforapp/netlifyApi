import React from 'react';
import { Link } from 'wouter';
import Container from './Container';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const About: React.FC = () => {
  const stats = [
    { value: '9+', label: 'Years Experience' },
    { value: '2,500+', label: 'Properties Appraised' },
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
                href="/about#qualifications" 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out"
              >
                View Credentials
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <Carousel 
                className="w-full" 
                opts={{ 
                  loop: true,
                  dragFree: true
                }}
              >
                <CarouselContent>
                  <CarouselItem className="w-full">
                    <div className="relative animate-fade-in">
                      <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-[#D97706] rounded-lg"></div>
                      <img 
                        src="/assets/prakash-profile.jpg" 
                        alt="Prakashkumar Panchal, P.App., CRA - Professional Property Appraiser" 
                        className="rounded-lg shadow-xl w-full h-auto object-cover transition-transform duration-[3000ms] scale-105 hover:scale-100" 
                        style={{ maxHeight: '500px' }}
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;