import React from 'react';
import { useInView } from 'react-intersection-observer';

const volunteerPrograms = [
  {
    title: 'Coordinator / Girls Coding Initiative',
    date: '2017 - 2021',
    summary: 'Led a program designed to teach young girls how to code. Built curriculums, mentored over 200 participants, and promoted diversity in the tech industry.',
    imageUrl: '/img14.jpg', 
    link: 'https://www.linkedin.com/in/mariam-bakenne-65660810a/',
    gallery: ['/gcc.jpeg', '/gc.jpg', '/gccc.jpg'],
  },
  {
    title: 'Women in Data, London',
    date: 'May 2024 – Oct 2024 (6 months)',
    summary: 'Volunteered as a Data Scientist, contributing to workshops, mentoring aspiring professionals, and providing data insights to support Women in Data’s mission of championing diversity, inclusion, and gender equity in technology and analytics.',
    imageUrl: '/img9.jpg', 
    link: 'https://www.linkedin.com/in/mariam-bakenne-65660810a/',
    gallery: ['/img5.jpg', '/img6.jpg', '/img3.jpg'],
  },
  {
    title: 'Lead Coding Instructor / SCA, Lagos',
    date: 'September, 2020 – June 2022',
    summary: 'Volunteered as Lead Coding Instructor, mentoring women, organizing tech events, and delivering training in machine learning and cloud computing to support She Code Africa’s mission of empowering women in tech.',
    imageUrl: '/sca.jpg', 
    link: 'https://www.linkedin.com/in/mariam-bakenne-65660810a/',
    gallery: ['vol2.jpg', 'vol1.jpg', 'vol3.jpeg'],
  },
  {
    title: 'President / Lagos State University Rotaract Club',
    date: 'July, 2018 – June, 2019',
    summary: 'Led club representation at district meetings and public events, coordinated volunteer activities, raised funds for community projects, implemented a mentorship program to boost member engagement by 30%, and secured local business sponsorships to expand initiatives.',
    imageUrl: '/rot.jpg', 
    link: 'https://www.linkedin.com/in/mariam-bakenne-65660810a/',
    gallery: ['rot2.jpeg', 'rot1.jpeg', 'rot3.jpeg'],
  }
];

const VolunteerPrograms = () => {
  return (
    <section className="bg-[#fce2cc] py-12" id='Volunteer'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Volunteer / Leadership Programs</h2>
        <p className="text-center text-gray-600 mb-12">
          Here are some of the volunteer / leadership programs I've been part of, focusing on giving back to the community and promoting positive change.
        </p>

        {/* Grid Layout for Volunteer Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerPrograms.map((program, index) => (
            <VolunteerCard key={index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VolunteerCard = ({ program }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the card is in view
    triggerOnce: false, // Animation re-triggers on re-entry
  });

  return (
    <div
      ref={ref}
      className={`bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img src={program.imageUrl} alt={program.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{program.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{program.date}</p>
        <p className="text-gray-700 mb-6">{program.summary}</p>

        {/* Picture Gallery */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-4">Picture Gallery</h4>
          <div className="flex space-x-2">
            {program.gallery.map((pic, picIndex) => (
              <img
                key={picIndex}
                src={pic}
                alt={`${program.title} gallery ${picIndex + 1}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <a
          href={program.link}
          className="text-gray-800 font-semibold hover:text-gray-600 transition-colors mt-4 inline-block"
          target='_blank'
          rel="noopener noreferrer"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default VolunteerPrograms;
