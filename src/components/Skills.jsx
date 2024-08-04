import React from 'react';

import Html from '../assets/Html.png';
import Css from '../assets/Css.png';
import Javascript from '../assets/Javascript.png';
import Github from '../assets/Github.png';
import MongoDb from '../assets/MongoDB.png';
import Nodejs from '../assets/Nodejs.png';
import Reactjs from '../assets/Reactjs.png';
import Angular from '../assets/Angular.png';

const Skills = () => {
  return (
    <div name='Skills' className='w-full h-auto bg-[#1B2531]  text-gray-300'>
        {/*container */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-8'> 
       <div className='mt-10'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Skills</p>
       <div></div>
        <p className='py-6 '>These are the technologies i've worked with</p>
       </div>
       <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Html} alt="Html" />
            <p className='my-4'>Html</p>
        </div>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Css} alt="Css" />
            <p className='my-4'>Css</p>
        </div>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Javascript} alt="Javascript" />
            <p className='my-4'>Javascript</p>
        </div>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Reactjs} alt="React" />
            <p className='my-4'>React</p>
        </div>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Angular} alt="Angular" />
            <p className='my-4'>Angular</p>
        </div>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Github} alt="Github" />
            <p className='my-4'>Github</p>
        </div>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={MongoDb} alt="MongoDb" />
            <p className='my-4'>MongoDb</p>
        </div>
        <div className='shadow-sm hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={Nodejs} alt="Nodejs" />
            <p className='my-4'>Nodejs</p>
        </div>
       </div>
        </div>
    </div>
  )
}

export default Skills