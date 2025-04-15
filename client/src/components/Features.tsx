import React from 'react';
import Container from './Container';
import { CheckCircle, Clock, FileText } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "AIC Certified",
      description: "Designated Canadian Residential Appraiser (CRA) with the Appraisal Institute of Canada."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Turnaround",
      description: "Most residential appraisal reports delivered within 24-48 hours of inspection."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Detailed Reports",
      description: "Professional reports with comprehensive market analysis and property details."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Why Choose Our Appraisal Services?</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#374151]">We deliver accurate, timely, and professional property appraisals that you can trust.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-full text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-[#374151]">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
