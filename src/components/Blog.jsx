import React from 'react';

const volunteerPrograms = [
  {
    title: 'Coordinator / Girls Coding Initiative',
    date: '2017 - 2021',
    summary: 'Led a program designed to teach young girls how to code. Built curriculums, mentored over 200 participants, and promoted diversity in the tech industry.',
    imageUrl: '/img14.jpg', // Replace with actual image
    link: 'https://www.linkedin.com/in/mariam-bakenne-65660810a/overlay/urn:li:fsd_profilePosition:(ACoAABt_oaIBWcIWD0cCS_NZNVDmlcZEIj-66lY,1920720963)/skill-associations-details?profileUrn=urn%3Ali%3Afsd_profile%3AACoAABt_oaIBWcIWD0cCS_NZNVDmlcZEIj-66lY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Blz0nMo6lReqQMBJouHInBQ%3D%3D',
    gallery: [
      '/gcc.jpeg', // Replace with actual images
      '/gc.jpg',
      '/gccc.jpg',
    ]
  },
  {
    title: 'Community Health Worker / Caring Hearts Scotland',
    date: '2023',
    summary: 'Assisted in implementing individualized care plans for elderly patients. Focused on improving the health and well-being of the community by providing support and care.',
    imageUrl: '/img9.jpg', // Replace with actual image
    link: '#',
    gallery: [
      '/img5.jpg', // Replace with actual images
      '/img6.jpg',
      '/img3.jpg',
    ]
  },
  {
    title: 'Youth Mentor / STEM for All',
    date: '2020 - 2022',
    summary: 'Mentored high school students in science, technology, engineering, and mathematics (STEM), focusing on building interest in STEM fields and fostering leadership skills.',
    imageUrl: '/img9.jpg', // Replace with actual image
    link: '#',
    gallery: [
      'img3.jpg', // Replace with actual images
      'img10.jpg',
      'img8.jpg',
    ]
  },
];

const VolunteerPrograms = () => {
  return (
    <section className="bg-[#fce2cc] py-12" id='Volunteer'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Volunteer Programs</h2>
        <p className="text-center text-gray-600 mb-12">
          Here are some of the volunteer programs I've been part of, focusing on giving back to the community and promoting positive change.
        </p>

        {/* Grid Layout for Volunteer Programs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteerPrograms.map((program, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerPrograms;
