import React from 'react';
import Container from '@/components/Container';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-[#1F2937]">Contact Us</h1>
          <p className="text-lg text-[#374151]">
            Ready to get your property appraised? Have questions about our services?
            Fill out the form below, and we'll get back to you promptly.
          </p>
        </div>
      </Container>
      
      <ContactForm />
    </section>
  );
};

export default ContactPage;
