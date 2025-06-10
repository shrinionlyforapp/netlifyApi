import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from './Container';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is involved in the appraisal process?",
      answer: "The appraisal process typically involves three main steps: inspection of the property, research of comparable properties and market trends, and report preparation. We conduct a thorough visual inspection of your property, research recent sales of similar properties in your area, analyze market trends, and prepare a detailed appraisal report with our findings and the final valuation."
    },
    {
      question: "How long does an appraisal take?",
      answer: "The on-site inspection typically takes 1-3 hours, depending on the size and complexity of the property. After the inspection, we usually deliver the completed appraisal report within 2-5 business days. For complex commercial properties or rush assignments, timelines may vary. We always strive to accommodate our clients' schedules and deadlines."
    },
    {
      question: "How much does an appraisal cost?",
      answer: "Appraisal fees vary depending on the property type, size, location, and complexity. Residential appraisals typically range from $300-$700, while commercial property appraisals start at $1,500. We provide transparent pricing and can give you an accurate quote after understanding your specific requirements. Contact us for a customized quote for your property."
    },
    {
      question: "Do I need to be present during the appraisal?",
      answer: "While it's not mandatory for you to be present during the appraisal inspection, we recommend it if possible. Your presence allows you to provide valuable information about the property, such as recent improvements or unique features that might not be immediately apparent. However, we can coordinate with property managers, tenants, or real estate agents for access if needed."
    },
    {
      question: "What areas do you serve in Toronto?",
      answer: "We provide appraisal services throughout the Greater Toronto Area (GTA), including Toronto, Mississauga, Brampton, Markham, Vaughan, Richmond Hill, Oakville, Burlington, and surrounding areas. We also serve Durham Region, Halton Region, York Region, and Peel Region. If you have a property outside these areas, please contact us to discuss your specific location."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#D97706] font-medium">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="max-w-3xl mx-auto text-lg text-[#374151]">Get answers to common questions about our appraisal services</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-[#374151]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
