import React from 'react';
import Button from '../components/Button';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative">
            <img
              src="/header-img.png"
              alt="Profile"
              className="rounded-lg"
              id="abt-img"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Professional Data Analyst and Web Developer</h2>
          <p className="mb-6 text-pretty text-justify">
            I am a dedicated data analyst with a passion for turning data into actionable insights. With a strong background in data collection, analysis, and visualization, I am committed to helping organizations make informed decisions through data-driven solutions. In addition to my expertise in data analysis, I am also a skilled web developer (frontend) with experience in creating responsive, user-friendly interfaces. I have a particular passion for empowering the next generation of tech enthusiasts, having tutored young girls in web development and inspiring them to pursue careers in technology.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="w-28 font-semibold">Name</span> : Mariam Bakenne
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Nationality</span> : Nigerian
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Phone</span> : (584) 154 8541
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Email</span> : mizbaken@gmail.com
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Experience</span> : 5+ Years
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Freelance</span> : Available
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Language</span> : English
            </div>
          </div>

          <div className="flex mt-6 space-x-4">
            <div className="bg-gray-800 p-4 rounded text-center">
              <span className="text-2xl font-bold block">4.5</span>
              <span className="text-sm">Rating</span>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <span className="text-2xl font-bold block">26+</span>
              <span className="text-sm">Client</span>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <span className="text-2xl font-bold block">514+</span>
              <span className="text-sm">Students</span>
            </div>
          </div>

          {/* Button Section */}
          <div className="mt-6">
            <Button
              link="#!"
              background="bg-[#fce2cc] p-4 rounded text-center"
              content="Download My Resume"
              textColor="text-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
