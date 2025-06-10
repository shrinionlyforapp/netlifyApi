import React from 'react';
import Container from './Container';
import { Star } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  initials: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      content: "Prakash provided an incredibly detailed and accurate appraisal of our commercial property. His expertise and professionalism made the entire process smooth and efficient. Highly recommend his services!",
      author: "Michael Scott",
      role: "Business Owner, Toronto",
      initials: "MS"
    },
    {
      content: "As a real estate agent, I've worked with many appraisers, but Prakash stands out for his thoroughness and market knowledge. His appraisals are always on point, which gives my clients confidence in their property decisions.",
      author: "Sarah Patel",
      role: "Real Estate Agent, GTA",
      initials: "SP"
    },
    {
      content: "We needed a mortgage refinancing appraisal quickly, and Prakash delivered beyond expectations. His report was comprehensive and he took the time to explain his valuation methodology, which we greatly appreciated.",
      author: "James Rodriguez",
      role: "Homeowner, Mississauga",
      initials: "JR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-[#D97706] font-medium">Client Feedback</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1F2937] mt-2 mb-4">What Our Clients Say</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#374151]">Hear from property owners, real estate professionals, and businesses we've worked with</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mb-4 text-[#374151] italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-[#374151]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
