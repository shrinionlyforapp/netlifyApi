import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import Container from './Container';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location === '/';
    return location.startsWith(path);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <nav>
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">PNP</div>
                <span className="ml-3 text-xl font-heading font-bold tracking-tight text-primary">
                  PNP <span className="text-[#D97706]">Appraisal Inc.</span>
                </span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.path}
                  className={`${isActive(link.path) ? 'text-primary' : 'text-[#374151] hover:text-primary'} font-medium transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-[#1e3a8a] text-white px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out"
              >
                Contact Us
              </Link>
              <Link 
                href="/request-quote" 
                className="ml-4 px-4 py-2 bg-white text-primary hover:bg-gray-100 rounded-md font-medium text-sm transition duration-150 ease-in-out"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                id="menu-btn" 
                className="text-gray-500 hover:text-primary focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-primary text-white' : 'text-dark hover:bg-primary hover:text-white'}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-[#1e3a8a]"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            <Link 
              href="/request-quote" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-primary hover:bg-gray-100"
              onClick={closeMenu}
            >
              Request Quote
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;