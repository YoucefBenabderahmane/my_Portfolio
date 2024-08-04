import React, {useState} from 'react'
import MyLogo from '../assets/MyLogo.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import Mail from '../assets/Mail.png'
import Resume from '../assets/Resume.png'; 
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav]= useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1B2531] text-gray-200'>
<div>
<img src={MyLogo} alt='Logo' style={{width:'110px', height:'110px', marginTop:'5px', marginLeft:'-10px'}}/>

</div>
{/*menu*/}

    <ul className='hidden md:flex text-lg mr-4'>
        <li>
            <Link  to='home'  smooth={true}  duration={700} delay={200} >
          Home
        </Link>
        </li>
        <li>
            <Link  to='about'  smooth={true}  duration={700} delay={200} >
          About
        </Link>
        </li>
        <li>
            <Link  to='Skills'  smooth={true}  duration={700} delay={200} >
          Skills
        </Link>
        </li>
        <li>
            <Link  to='Work'  smooth={true}  duration={700} delay={200}>
          Work
        </Link>
        </li>
        <li>
            <Link  to='Contact'  smooth={true}  duration={700} delay={200} >
          Contact
        </Link>
        </li>
    </ul>

{/*Humburger*/}
<div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars/> : <FaTimes />}
</div>
{/*Mobile Menu*/}
<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  bg-[#1B2531] flex flex-col justify-center items-center '}>
        <li className='py-6 text-4xl'>
             <Link onClick={handleClick} to='home'  smooth={true}  duration={500} delay={200} >
          Home
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='about'  smooth={true}  duration={500} delay={200} >
          About
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='Skills'  smooth={true}  duration={500} delay={200} >
          Skills
        </Link>
        </li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='Work'  smooth={true}  duration={500} delay={200} >
          Work
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='Contact'  smooth={true}  duration={500} delay={200} >
          Contact
        </Link></li>
    </ul>

{/*Social icons*/}
<div className=' lg:flex  fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800  social-icon-container'>
        <a className='flex justify-between items-center w-full text-gray-200 '
        href='https://www.linkedin.com/in/youcef-benabderahmane/'>
            Linkedin<FaLinkedin size={30}/>
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0d1117] social-icon-container'>
        <a className='flex justify-between items-center w-full text-gray-200' 
        href='https://github.com/YoucefBenabderahmane'>
            Github<FaGithub size={30}/>
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-50 social-icon-container'>
        <a className='flex justify-between items-center w-full text-red-500' 
        href='mailto:benabderahmane.youcef@gmail.com'>
            Email< img className='w-20 mx-6' src={Mail} alt="Mail"/>
        </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00ADB5] social-icon-container'>
    <a className='flex justify-between items-center w-full text-white' 
  href='/Resume.pdf' target="_blank" rel="noopener noreferrer" download>
  Resume< img className='w-24 mx-0' src={Resume} alt="Resume"/>
</a>
    </li>
</ul>
</div>
    </div>
  )
}

export default Navbar