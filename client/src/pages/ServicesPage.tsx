import React from 'react';
import Container from '@/components/Container';
import Services from '@/components/Services';
import CTASection from '@/components/CTASection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const ServicesPage: React.FC = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start with a detailed conversation about your property appraisal needs to understand the purpose, property type, and timeline requirements.'
    },
    {
      number: '02',
      title: 'Property Inspection',
      description: 'Our appraiser conducts a thorough inspection of the property, documenting all relevant details, taking measurements, and noting features that affect value.'
    },
    {
      number: '03',
      title: 'Market Research & Analysis',
      description: 'We analyze comparable properties, current market conditions, and other factors to determine an accurate value for your property.'
    },
    {
      number: '04',
      title: 'Appraisal Report Preparation',
      description: 'We prepare a comprehensive appraisal report that includes detailed property information, valuation methods used, and the final value determination.'
    },
    {
      number: '05',
      title: 'Report Delivery & Review',
      description: 'We deliver the completed report and are available to answer any questions you may have about the valuation process or conclusion.'
    }
  ];

  return (
    <>
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-[#1F2937]">Our Appraisal Services</h1>
            <p className="text-lg text-[#374151]">
              At PNP Appraisal Inc., we provide comprehensive residential property valuation services tailored to meet your specific needs.
              Our expertise spans residential properties and specialized valuation requirements.
            </p>
          </div>
        </Container>
      </section>

      <Services />
      
      <section className="py-16 bg-white">
        <Container>
          <div id="residential-appraisals" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4">Residential Appraisals</h2>
            <p className="text-gray-600 mb-4">
              Our residential appraisal services cover single-family homes, condominiums, and townhouses. We provide detailed valuations based on thorough property inspections, market analysis, and comparative sales data.
            </p>
            <Link href="/contact" className="inline-flex items-center text-primary hover:text-[#1e3a8a] font-medium">
              Request Residential Appraisal <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>



          <div id="land-valuations" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-4">Land Valuations</h2>
            <p className="text-gray-600 mb-4">
              Our land valuation services help determine the market value of vacant land, considering factors like location, zoning, and development potential.
            </p>
            <Link href="/contact" className="inline-flex items-center text-primary hover:text-[#1e3a8a] font-medium">
              Request Land Valuation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <span className="text-[#D97706] font-medium">Our Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-4">The Appraisal Process</h2>
            <p className="max-w-3xl mx-auto text-lg text-[#374151]">
              We follow a structured, thorough approach to deliver accurate property valuations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-md ${index > 2 ? 'md:col-start-2' : ''}`}>
                <div className="text-3xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#374151]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-primary hover:bg-[#1e3a8a] text-white px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out"
            >
              Request an Appraisal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default ServicesPage;
