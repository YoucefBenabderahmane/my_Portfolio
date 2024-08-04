import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-auto bg-[#1B2531] text-gray-300'>
      <div className='flex flex-col justify-center items-center p-8'>
        <div className='max-w-[1000px] w-full'>
          <div className='sm:text-center pb-8 mt-10'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
          </div>
          <div className='grid sm:grid-cols-2 gap-4 px-4 mb-8'>
            <div className='sm:text-left text-center sm:text-4xl font-bold'>
              <p>Hi, I'm Youcef, nice to meet you. Please take a look around.</p>
            </div>
            <div className='text-center sm:text-left'>
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small businesses all
                the way to large enterprise corporations. What would you do if
                you had a software expert available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;