import React from 'react';
import Barbers from '../assets/Barbers.webp';
import Food from '../assets/Food.jpg';
import Gym from '../assets/Gym.jpg';
import Mark from '../assets/Mark.jpg';
import Med from '../assets/Med.jpg';
import Mobfood from '../assets/Mobfood.png';

const Work = () => {
  const projects = [
    { image: Med, title: 'React Js Application', url: 'https://arsan.vercel.app/' },
    { image: Food, title: 'Angular Js', url: 'https://github.com/YoucefBenabderahmane/SOS-Translation-app.git' },
    { image: Barbers, title: 'React Native', url: 'https://example.com/react-native' },
    { image: Gym, title: 'Angular JS', url: 'https://example.com/angular-js' },
    { image: Mobfood, title: 'React Native', url: 'https://example.com/react-native' },
    { image: Mark, title: 'React Native', url: 'https://example.com/react-native' },
  ];

  return (
    <div name='Work' className='w-full md:h-auto text-gray-300 bg-[#1B2531]'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-8'>
        <div className='pb-8 mt-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid items */}
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
              title={project.title} // Set the title attribute
            >
              {/* hover effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>{project.title}</span>
                <div className='pt-8 text-center'>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>More ...</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
