/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"

import Resume from "./Resume/Resume";

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <section className="about" data-page="about">

      <header>
        <h2 className="h2 article-title motion-preset-shrink motion-preset-flomoji-🚀">About me</h2>
      </header>

      <section className="about-text motion-preset-shrink ">
        <p>
          Hi there! 👋
        </p>

        <p>

          I'm a full-stack developer with expertise in web and React Native app development, backed by DevOps practices like AWS and Docker. Passionate about AI LLM models and Web3, I focus on creating scalable, responsive applications. Open to freelance work or new opportunities, <br/>feel free to connect!</p>
      </section>

      <Resume />
    </section>
  )
}

export default About