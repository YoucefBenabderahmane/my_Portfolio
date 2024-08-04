import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-auto bg-[#1B2531] flex justify-center items-center p-8'>
 <form method='POST' action="https://getform.io/f/7430f19b-87a1-4e13-8402-4063c53fc396" className='flex flex-col max-w-[600px]'>
    <div className='pb-8 mt-10'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'>Submit the form below or send me an email</p>
    </div>
    <input className=' bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
    <textarea className=' bg-[#ccd6f6] p-2' name="message"  placeholder='Message' rows="10"></textarea>
    <button className='text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate </button>
 </form>
    </div>
  )
}

export default Contact