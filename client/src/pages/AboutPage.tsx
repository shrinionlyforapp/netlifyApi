import React from 'react';
import Container from '@/components/Container';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import { Award, CheckCircle, Briefcase, BookOpen, Linkedin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const qualifications = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "P.App., CRA Designations",
      description: "Professional Appraiser (P.App.) and Canadian Residential Appraiser (CRA) certified by the Appraisal Institute of Canada."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "8+ Years Experience",
      description: "Extensive experience working with major AMCs including FNF, Brookfield (now RPS), and NAS."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Bachelor of Science Degree",
      description: "Strong educational background combined with specialized training in real estate appraisal."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "RECO Registered Realtor",
      description: "Additional expertise as a registered realtor with the Real Estate Council of Ontario."
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      title: "LinkedIn Profile",
      description: <a href="https://ca.linkedin.com/in/prakash-panchal-53111846" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">View Professional Profile on LinkedIn</a>
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
          <div id="qualifications" className="text-center mb-16 scroll-mt-32 pt-8">
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
              Prakash is a self-motivated professional who balances industry expertise, communication skills, and analytical 
              abilities to deliver productive, reliable, and profitable results for all clients.
            </p>
            <p className="text-[#374151] mb-4">
              With extensive experience in both urban and rural property appraisals and proficiency in MS Office (Excel, Word, PowerPoint, 
              and Outlook), Prakash ensures comprehensive reports and presentations that meet the highest professional standards.
            </p>
            <p className="text-[#374151]">
              Whether you're a major bank, private lender, mortgage broker, buyer, seller, or lawyer, you can count on 
              PNP Appraisal Inc. to provide objective, well-supported valuations that help you make informed decisions 
              about residential properties throughout the GTA and surrounding regions.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
};

export default AboutPage;
