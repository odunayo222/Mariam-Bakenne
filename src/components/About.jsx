import React from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../components/Button';

const About = () => {
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: false, // Change to false to trigger animation every time it's in view
    threshold: 0.3, // Adjusted for earlier triggering
  });
  
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24" id="About">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div
          className={`md:w-1/2 mt-8 md:mt-0 transition-all duration-1000 ease-out transform ${
            imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          ref={imgRef}
        >
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
        <div
          className={`md:w-1/2 transition-all duration-1000 ease-out transform ${
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          ref={textRef}
        >
          <h3 className="text-2xl font-semibold mb-4">Data-Driven Problem Solver | Data Scientist
          </h3>
          <div className="mb-6 text-pretty text-justify">
          <p>As a Data Scientist, I am passionate about leveraging data, machine learning, and AI to solve complex problems and create meaningful impact. With a strong foundation in data analysis, predictive modeling, and storytelling, I turn data into actionable strategies that empower businesses and communities alike.</p>
      
           <h3 className='font-semibold text-2xl mt-4 pb-3'>💡 What Drives Me:</h3>
            <p>What drives me is the passion for building predictive models and algorithms that uncover valuable insights and drive innovation. I am deeply committed to harnessing powerful tools such as Python, R, SQL, and visualization platforms like Tableau and Power BI to effectively communicate complex data and turn it into actionable strategies. Constantly exploring emerging technologies in AI and machine learning is essential to staying at the forefront of this rapidly evolving field. For me, data science is more than just a profession—it's a calling. Every dataset tells a unique story, and I thrive on uncovering those narratives to drive meaningful change. For me, data science is not just a profession—it’s a calling. Every dataset tells a story, and I thrive on uncovering narratives that drive change.</p>

          <h3 className='font-semibold text-2xl mt-4'>🌟 Beyond the Numbers:</h3>

          <p>Volunteering is a core part of my journey. Whether it’s mentoring aspiring data professionals, working with non-pro</p>
          </div>
          <div className="space-y-2">
            {/* Info */}
            <div className="flex items-center">
              <span className="w-28 font-semibold">Name</span> : Mariam Bakenne
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Nationality</span> : Nigerian
            </div>
            <div className="flex items-center">
              <span className="w-28 font-semibold">Phone</span> : +44 7342 487638
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
            <div className="flex items-center">
              <span className="w-28 font-semibold">Location</span> : Edinburgh, United Kingdom
            </div>
          </div>

          {/* Stats */}
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
            <a
              href="Mariam-Bakenne(SeniorData Scientist) CV.pdf"
              download="Mariam-Bakenne(SeniorData Scientist) CV.pdf"
              className="bg-[#fce2cc] p-4 rounded text-center text-gray-800 hover:bg-gray-700 hover:text-white transition duration-300"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
