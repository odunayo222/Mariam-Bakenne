import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">About Me</h4>
            <p className="text-gray-300 text-pretty text-justify">
            Passionate Data Scientist with 5 years of experience in data analysis, machine learning, and predictive modeling, dedicated to leveraging data for impactful decisions. Committed to community engagement and driving meaningful change through technology and innovation.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#About" className="hover:text-white">About</a></li>
              <li><a href="#Skills" className="hover:text-white">Skills</a></li>
              <li><a href="#Services" className="hover:text-white">Services</a></li>
              <li><a href="#Contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="text-gray-300 space-y-2">
              <li><i className="fa-regular fa-envelope"></i>  Email: <a href="mailto:example@gmail.com" className="hover:text-white">mizbaken@gmail.com</a></li>
              <li><i className="fa-solid fa-phone"></i> Phone: <a href="tel:+44 7342 487638" className="hover:text-white">+44 7342 487638</a></li>
              <li><i className="fa-solid fa-location-dot"></i> Location: Edinburgh, United Kingdom</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Mariam Bakenne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
