/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"

import Resume from "./Resume/Resume";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I make high-quality photos of any category at a professional level."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <section className="about " data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
      Hi there! 👋
      </p>

      <p>
      I am a full-stack developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), with a focus on creating responsive, scalable web applications. Alongside my development skills, I have experience in DevOps practices, utilizing AWS, Docker, Jenkins, and CI/CD pipelines to streamline deployment and ensure reliable performance. Feel free to check out my projects for skills validation, and I’m also open to freelance work or new opportunities.
      </p>
    </section>

    <Resume/>
  </section>
  )
}

export default About