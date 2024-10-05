"use client";
import React,{useState} from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkdinIcon from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  const {emailSubmitted, setEmailSubmitted} =useState(false);
  const handleSubmit = async(e) =>{
    e.preventDefalut();
    const data ={
      email: e.target.email.value,
      subject:e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "api/send";
    const options={
      method:"POST",

      headers: {
        'Content-Type':'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint,options);
    const resData = await response.json();
    console.log(resData);
    if(resData.status ===200){
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  }
  return <section className='grid md: grid-cols-2 my-12 md:my12 py-24 gap-4 relative'>
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
    <div>
        <h5 className='text-xl font bold text-white my-2'>Lets Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
        {" "}
        I m currently looking for new oppertunities, my inbox is always open whether you
        have a question or just want to say hi,I will try my best to get back to you!
        </p>
       <div className='social-icons flex flex-row gap-6'>
       <Link href="github.com">
       <Image src={GithubIcon} alt='Github Icon'/>
       </Link>
       <Link href="Linkdin.com">
       <Image src={LinkdinIcon} alt='Linkdin Icon'/>
       </Link>
       </div>
    </div>
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className='mb-6'>
        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your Email</label>
        <input
        name='email' 
        type ="email" 
        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
        id="email required" required placeholder = "mohitskhamarim24@gmail.com"/>
        </div>
        <div className=' mb-6'>
        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>Subject</label>
        <input
        name='subject' 
        type ="text" 
        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
        id="subject" required placeholder = "hi"/>
        </div>
        <div className='mb-6'>
        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>Message</label>
         <textarea
         name='message'
         id='message'
         className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
         placeholder="Hi Mohit, I would like to talk about.." />
        </div>
        <button type='submit'
        className="bg-purple-500 hover:bg-purple-600 text-white fontmedium py-2.5 px-5 rounded-lg w-full">Send Message</button>
        {
          emailSubmitted &&  (
            <p className='text-green-500 text-sm mt-2'>
              Email sent Successfully!
            </p>
          )
        }
      </form>
    </div>
  </section>
}

export default EmailSection;