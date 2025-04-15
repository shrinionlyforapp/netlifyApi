import React from 'react';
import Container from '@/components/Container';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import { Award, CheckCircle, Briefcase, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  const qualifications = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certified Professional Appraiser",
      description: "Licensed by the Appraisal Institute of Canada with continuous professional development."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "15+ Years Experience",
      description: "Extensive experience in the Greater Toronto Area real estate market across all property types."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Advanced Market Knowledge",
      description: "Deep understanding of local market trends, building practices, and neighborhood characteristics."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Commitment to Excellence",
      description: "Dedicated to delivering thorough, accurate appraisals that exceed client expectations."
    }
  ];

  return (
    <>
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-[#1F2937]">About PNP Appraisal Inc.</h1>
            <p className="text-lg text-[#374151]">
              Learn about the experience, qualifications, and commitment to excellence that make PNP Appraisal Inc.
              a trusted name in property appraisal services throughout the Greater Toronto Area.
            </p>
          </div>
        </Container>
      </section>

      <About />

      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="text-[#D97706] font-medium">Expertise & Credentials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-4">Professional Qualifications</h2>
            <p className="max-w-3xl mx-auto text-lg text-[#374151]">
              Prakash brings a wealth of experience and professional credentials to every appraisal project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {qualification.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{qualification.title}</h3>
                  <p className="text-[#374151]">{qualification.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="font-heading text-2xl font-semibold mb-4">Professional Approach</h3>
            <p className="text-[#374151] mb-4">
              Prakash approaches each appraisal assignment with a commitment to thorough research, detailed analysis, and clear communication. 
              He believes in providing not just a number, but a comprehensive understanding of the factors that influence property value.
            </p>
            <p className="text-[#374151] mb-4">
              With a focus on accuracy and timeliness, Prakash has built a reputation for delivering reliable appraisals that stand up to scrutiny
              from lenders, courts, and other stakeholders. His dedication to professional ethics and continuous learning ensures that clients
              receive the highest quality service for their appraisal needs.
            </p>
            <p className="text-[#374151]">
              Whether you're a homeowner, real estate professional, lender, or attorney, you can count on Prakash to provide objective,
              well-supported valuations that help you make informed decisions about your property.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default AboutPage;
