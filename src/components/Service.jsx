import React from 'react';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ title, icon, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Triggers when 10% of the card is in view
  });

  return (
    <div
      ref={ref}
      className={`bg-white shadow-2xl rounded-lg p-6 text-center transform transition-transform duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="flex justify-center mb-4">
        <div className="bg-red-100 rounded-full p-4">
          <svg className="h-10 w-10 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        <button className="text-gray-800 text-lg p-2 rounded-full hover:bg-red-100 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Data Analysis',
      icon: (
        <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2zM3 19h18v2H3v-2z" />
      ),
      description: 'Transforming data into actionable insights.',
    },
    {
      title: 'Web Development',
      icon: (
        <>
          <path d="M9 7L4 12L9 17" stroke="#000000" stroke-width="2"/>
          <path d="M15 7L20 12L15 17" stroke="#000000" stroke-width="2"/>
        </>
      ),
      description: 'Crafting responsive and dynamic websites.',
    },
    {
      title: 'Tutor',
      icon: (
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 5h2v6h-2V7zm0 8h2v2h-2v-2z" />
      ),
      description: 'Empowering young minds with tech skills.',
    },
    {
      title: 'Volunteer',
      icon: (
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zM10.5 10V5h3v5h2.5L12 13.5 8 10h2.5z" />
      ),
      description: 'Giving back through community service.',
    },
    {
      title: 'Mentorship',
      icon: (
        <path d="M12 12l8-4-8-4-8 4 8 4zm0 0l8 4v4l-8 4-8-4v-4l8-4z" />
      ),
      description: 'Guiding the next generation of developers.',
    },
    {
      title: 'Consulting',
      icon: (
        <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h8v2H3v-2zm0 4h4v2H3v-2z" />
      ),
      description: 'Providing expert advice and strategies.',
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold text-gray-800 text-center">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
