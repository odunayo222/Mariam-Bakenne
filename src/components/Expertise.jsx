import React from 'react';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Data visualisation', percentage: 80, color: 'bg-teal-400' },
  { name: 'Statistical analysis', percentage: 95, color: 'bg-orange-400' },
  { name: 'Data wrangling and cleaning', percentage: 60, color: 'bg-purple-400' },
  { name: 'Machine learning', percentage: 85, color: 'bg-pink-400' },
  { name: 'Python', percentage: 80, color: 'bg-blue-400' },
  { name: 'Data Management', percentage: 90, color: 'bg-green-400' }
];

const MyExpertise = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section className="bg-white py-12 pb-28 pt-16" id="Skills" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Expertise Area</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: inView ? `${skill.percentage}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExpertise;
