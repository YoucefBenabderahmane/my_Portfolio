import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-scroll';

const Home = () => {
  const [nav, setNav]= useState(false)
  const handleClick = () => setNav(!nav)
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const props = useSpring({
    opacity: isReady ? 1 : 0, // Set opacity based on isReady
    marginLeft: isReady ? '0%' : '-20%',
    config: {
      duration: 1000,
    },
  });

  return (
    <div name="home" className="w-full h-screen bg-[#1B2531] flex justify-center items-center">
    {/*container*/}
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-center">
      <animated.h1 style={props} className="text-[#00ADB5] font-bold py-4 text-center sm:text-left">
        Hi, My Name is
      </animated.h1>
  
      <animated.h1 style={props} className="text-4xl sm:text-7xl font-bold py-4 text-[#ccd6f6] text-center sm:text-left">
        Youcef Benabderahmane
      </animated.h1>
  
      <animated.h2 style={props} className="text-4xl sm:text-7xl font-bold text-[#8892b0] text-center sm:text-left">
        I'm a Front-end Developer
      </animated.h2>
  
      <div className="flex justify-center sm:justify-start">
        <animated.button style={props} className="text-white group border-2 px-8 py-3 my-8 ml-8 flex items-center hover:bg-[#00ADB5] hover:border-[#00ADB5] hover:animate-bounce duration-400">
          <Link onClick={handleClick} to="Work" smooth={true} duration={500} delay={200}>
            View Work
          </Link>
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-2" />
          </span>
        </animated.button>
      </div>
    </div>
  </div>
  );
};

export default Home;