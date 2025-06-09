import React from 'react';
import { Link } from 'wouter';
import Container from './Container';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F2937] text-white">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary font-bold text-xl">PNP</div>
              <span className="ml-3 text-xl font-heading font-bold tracking-tight">
                PNP <span className="text-[#D97706]">Appraisal Inc.</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Professional residential property appraisal services in the Greater Toronto Area, 
              providing accurate valuations for homes, condominiums, and land.
            </p>
            <div className="text-gray-300 mb-6">
              <p className="mb-2"><strong>Office Address:</strong> 47 Curran Hall Cres, Scarborough ON M1G 0A1</p>
              <p className="mb-2"><strong>Phone:</strong> <a href="tel:4168756515" className="hover:text-white transition-colors">416-875-6515</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@pnpappraisal.com" className="hover:text-white transition-colors">info@pnpappraisal.com</a></p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Residential Appraisals</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Land Valuations</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Legal & Litigation Support</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Mortgage Financing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Tax Assessment Appeals</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} PNP Appraisal Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
