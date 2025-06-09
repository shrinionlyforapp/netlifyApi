import React from 'react';
import Container from './Container';
import { Users, Award, Briefcase } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  icon: React.ReactNode;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Prakashkumar Panchal",
      title: "Principal Appraiser",
      credentials: "P.App., CRA - Designated Canadian Residential Appraiser",
      icon: <Award className="h-8 w-8" />
    },
    {
      name: "Jagdeep Saini",
      title: "Senior Appraiser",
      credentials: "AIC Candidate",
      icon: <Users className="h-8 w-8" />
    },
    {
      name: "Mukesh Patel",
      title: "Appraiser",
      credentials: "AIC Candidate",
      icon: <Users className="h-8 w-8" />
    },
    {
      name: "Dipak Bhatt",
      title: "Office Admin",
      credentials: "Administrative Support",
      icon: <Briefcase className="h-8 w-8" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-medium">Our Team</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-4">Meet Our Professional Team</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#374151]">
            Our experienced team of certified appraisers and support staff are dedicated to providing accurate and timely property valuations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 rounded-full text-primary">
                {member.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1F2937]">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.title}</p>
              <p className="text-sm text-[#374151]">{member.credentials}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;