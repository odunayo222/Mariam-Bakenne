import React from 'react';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const educationData = [
    {
      title: 'Marketing',
      institution: 'Lagos State University',
      years: '2014 - 2019',
      description:
        'Developed expertise in marketing strategies, consumer behavior analysis, and brand management. Gained hands-on experience in digital marketing, market research, and communication techniques aimed at driving business growth and customer engagement.',
    },
    {
      title: 'Big Data',
      institution: 'University Of Stirling',
      years: '2021 - 2023',
      description:
        'Completed a Master’s in Big Data, with a focus on data mining, machine learning, and cloud computing. Gained expertise in handling large datasets, developing predictive models, and utilizing big data tools to extract actionable insights for business and research applications.',
    },
    {
      title: 'Data Accelerator Course',
      institution: 'Code Division',
      years: '2022',
      description:
        'Successfully completed the PDA level 8 course in Data Science. The emphasis was on work-based learning and included practical applications of statistical analysis, cleaning, wrangling, and visualising data using Python, Excel, and PowerBI.',
    },
    {
      title: 'Python for Data Science',
      institution: 'Code Clan',
      years: '2022',
      description:
        'A short course focusing on Python basics, introduction to writing code, working with Jupyter notebooks, making plots using Seaborn, and using Pandas to manipulate and analyze data.',
    }
  ];

  // Intersection Observer Hook
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is visible
  });

  return (
    <section className="bg-gray-900 py-12" id="Education" ref={ref}>
      <div className="container mx-auto">
        <h2 className={`text-4xl font-semibold text-center text-white mb-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          My Education
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-start bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="text-white mb-4 sm:mb-0">
                <h3 className="text-2xl font-bold">{edu.title}</h3>
                <p className="text-sm italic text-gray-400">{edu.institution}</p>
                <p className="mt-4">{edu.description}</p>
              </div>
              <div className="text-yellow-400 text-3xl font-semibold sm:ml-8">{edu.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
