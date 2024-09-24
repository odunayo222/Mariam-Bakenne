import React from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaUserMd, FaBriefcase } from 'react-icons/fa'; // Example icons
import { useInView } from 'react-intersection-observer'; // Import useInView

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Coordinator / Girls Coding',
      years: '2017 - 2021',
      description:
        "I'm an expert in curriculum creation, mentorship, and building inclusive learning environments, with a passion for nurturing the next generation of female programmers and promoting diversity in the tech sector.",
      icon: <FaChalkboardTeacher className="text-3xl text-orange-500 mb-4" />,
    },
    {
      title: 'Front-End Software Developer / Phynix Media Limited.',
      years: '2021',
      description:
        'Using HTML, CSS, and JavaScript, I constructed responsive web interfaces; I worked with designers and back-end engineers; I optimized performance; developed responsive web applications for businesses.',
      icon: <FaLaptopCode className="text-3xl text-blue-500 mb-4" />,
    },
    {
      title: 'Intern / Code Division',
      years: '2022',
      description:
        'During my internship, I worked on sharpening my knowledge as regards my skills in the aspect of data analysis. During this period, I built regression models and also worked on core analysis projects to drive business insights using several tools, from Excel to Python and business intelligence tools.',
      icon: <FaBriefcase className="text-3xl text-green-500 mb-4" />,
    },
    {
      title: 'Healthcare Assistance / Caring Hearts Scotland',
      years: '2023',
      description:
        'Developed and implemented individual care plans based on assessments and in consultation with the service user and their family.',
      icon: <FaUserMd className="text-3xl text-red-500 mb-4" />,
    }
  ];

  return (
    <section className="bg-[#fce2cc] py-12" id="Experience">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Work Experience</h2>
        <p className="text-center text-gray-500 mb-12">
          Here’s a snapshot of my professional journey and the roles I've undertaken.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Card component with animation
const ExperienceCard = ({ exp }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation every time in view
    threshold: 0.1, // Trigger when 10% of the card is in view
  });

  return (
    <div
      ref={ref}
      className={`bg-white shadow-md p-6 rounded-lg transform transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex justify-center">{exp.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center">{exp.title}</h3>
      <p className="text-gray-800 text-center mb-4">{exp.years}</p>
      <p className="text-gray-600 text-center">{exp.description}</p>
    </div>
  );
};

export default WorkExperience;
