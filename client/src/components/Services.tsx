import React from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Container from './Container';

interface ServiceItem {
  image: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Residential Appraisals",
      description: "Comprehensive valuation services for single-family homes, condominiums, townhouses, and multi-family properties."
    },
    {
      image: "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Land Valuations",
      description: "Accurate appraisals for vacant land, development sites, and agricultural properties to support your investment decisions."
    },
    {
      image: "https://images.unsplash.com/photo-1611095785020-1ba3dd228ea7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Legal & Litigation Support",
      description: "Expert witness testimony and appraisals for legal matters, including divorce settlements, estate planning, and disputes."
    },
    {
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Mortgage Financing",
      description: "Lender-approved appraisals for mortgage origination, refinancing, home equity loans, and private lending."
    },
    {
      image: "https://images.unsplash.com/photo-1618090584176-7132b9911657?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      title: "Tax Assessment Appeals",
      description: "Professional assistance with property tax assessment reviews and appeals to ensure fair property taxation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-medium">Our Expertise</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-4">Comprehensive Appraisal Services</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#374151]">Trusted residential property valuations for all your real estate needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#374151] mb-4">{service.description}</p>
                <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:text-[#1e3a8a] font-medium flex items-center">
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://www.aicanada.ca/appraisers/909412/?pager=1&cn-reloaded=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary/80"
          >
            View AIC Credentials <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;