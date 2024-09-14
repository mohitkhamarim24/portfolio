"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl font-extrabold sm:text-5xl lg'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I m {" "}
            </span>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Mohit',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Software Developer',
        1000,  
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.
          </p>
          <div>
            <button className="px-6 py-3 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >Hire Me</button>
            <button className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
          </div>
        </div>
        <div className='col-span-5 flex justify-center sm:justify-end relative mt-10'>
  <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] relative">
    <Image 
      src="/image/file.png"
      alt="Hero"
      className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
      width={200}
      height={200}
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;
