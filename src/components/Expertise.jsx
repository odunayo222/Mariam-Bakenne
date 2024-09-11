import React from 'react';

const skills = [
  { name: 'Web Design', percentage: 80, color: 'bg-teal-400' },
  { name: 'HTML/CSS', percentage: 95, color: 'bg-orange-400' },
  { name: 'JavaScript', percentage: 60, color: 'bg-purple-400' },
  { name: 'Python', percentage: 85, color: 'bg-pink-400' },
  { name: 'Data Analyst', percentage: 80, color: 'bg-teal-400' }
];

const MyExpertise = () => {
  return (
    <section className="bg-white py-12">
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
                  className={`h-2.5 rounded-full ${skill.color}`}
                  style={{ width: `${skill.percentage}%` }}
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
