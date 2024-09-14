"use client"
import Image from 'next/image';
import React,{useTransition, useState} from 'react';
import TabButton  from './TabButton';

const TAB_DATA =[
  {
    title:"Skills",
    id:"skills",
    content:(
      <ul>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>React.js</li>
        <li>Data Structure and Algorithm</li>
        <li>Salesforce customization and configuration</li>
      </ul>
    )
  },
  {
      title:"Educations",
      id:"education",
      content:(
        <ul>
          <li>Lovely Professional University</li>
          <li>Elite Institute of Science and Applications</li>
        </ul>
      )

  },
  {
    title:"Certifications",
    id:"certifications",
    content:(
      <ul>
        <li>Full Stack Bootcamp 2021</li>
        <li>Platform Developer 1</li>
        <li>System Administrator</li>
        <li>Platform App Builder</li>
      </ul>
    )
  }
]


const AboutSection = () => {
  
  const[tab,setTab] =useState("skills");
  const[startTranstion,isPending] = useTransition();

  const handleTabChange = (id) => {
    setTab(id); // Simply update the tab state
  };
  return (
   <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image 
      src="/image/about-image.png"
      alt='about'
      width={500}
      height={500}
    />
    <div>
    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
    <p className="text-base lg:text-lg">
As a Computer Science and Engineering graduate from Lovely Professional University, 
I have cultivated a strong foundation in coding and software development. My professional journey began at Cognizant
, where I transitioned from an intern to a full-time employee, gaining hands-on experience and honing my technical skills.

I am passionate about coding and have extensive experience working with data structures and algorithms.
My expertise spans web development, particularly with React.js and MongoDB, as well as Salesforce development, 
where I focus on both configuration and customization.

 Beyond my professional life, I am an avid tea lover and enjoy engaging in sports such as football and cricket.
 These interests help me maintain a balanced and active lifestyle, which in turn fuels my creativity and
 problem-solving abilities in my work.
 
    </p>
    <div className='flex flex-row justify-start mt-8'>
    <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
    </div>

    <div className='mt-8'>{TAB_DATA.find((t)=>t.id===tab).content}</div>
    </div>
    
    </div>
   </section>
  )
}

export default AboutSection