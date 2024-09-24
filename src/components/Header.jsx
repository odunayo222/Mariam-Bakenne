import '../App.css';
import React, { useEffect, useRef } from 'react';
import Button from './Button';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (entry.isIntersecting) {
          heroContent.classList.add('content-visible');
          heroImage.classList.add('image-visible');
        } else {
          heroContent.classList.remove('content-visible');
          heroImage.classList.remove('image-visible');
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Hello, <span className='huh'>I’m </span>✌️<br />
            Mariam <span className='huh'> Bakenne</span>
          </h1>
          <p><b>Data Scientist | <span className='huh'>Web Developer</span></b></p>
          <div className="hero-buttons">
            <Button link="#Contact" background="bg-gray-800" content="Let's Talk" hover="hover:bg-transparent hover:text-gray-800" textColor="text-white" />
            <Button link="#Volunteer" background="bg-transparent border-gray-800" content="Volunteer Work" hover="hover:bg-gray-800 hover:text-white" textColor="text-gray-800 " />
          </div>
        </div>
        <img src="/header-img.png" alt="Mark Henry" className="hero-image" />
        <div className="diagonal-background"></div>
      </div>
    </header>
  );
}
