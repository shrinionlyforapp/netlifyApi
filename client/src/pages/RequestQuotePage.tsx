
import React from 'react';
import Container from '@/components/Container';
import RequestQuote from '@/components/RequestQuote';

const RequestQuotePage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-[#1F2937]">Request a Quote</h1>
          <p className="text-lg text-[#374151]">
            Fill out the form below to request a quote for your property appraisal needs. 
            We offer specialized services for both property owners and mortgage brokers.
          </p>
        </div>
        <RequestQuote />
      </Container>
    </section>
  );
};

export default RequestQuotePage;
