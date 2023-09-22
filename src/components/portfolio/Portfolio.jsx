import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/video1.mp4'
import IMG2 from '../../assets/video2.mp4'
import IMG3 from '../../assets/video3.mp4'
import IMG4 from '../../assets/video4.mp4'
import IMG5 from '../../assets/video5.mp4'
// import IMG6 from '../../assets/portfolio6.jpg'




const Portfolio = () => {
  return (
  <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Projects</h2>
     <div className="container project_container">
      <article  className='project_item'>
           <div className="project_item-image">
            <video src={IMG1} controls autoPlay loop></video>
           </div>
             <h3>Create a fully Responsive Project for Parashara Academy.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/kmwtsachin04/Parashara" className='btn' target="_blank">GitHub</a>
             <a href="https://www.parasharaacademy.com/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <video src={IMG2} controls autoPlay loop muted></video>
           </div>
             <h3>Create a Fully Responsive Website for MDR Hetel & Cafe.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/kmwtsachin04/Food-Site" className='btn' target="_blank">GitHub</a>
             <a href="https://www.mdrhotelcafe.com/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <video src={IMG3} controls loop autoPlay muted></video>
           </div>
             <h3>Create a Pokemon Details Website using API & ReactJs.</h3>
             <div className="project_item-cta">
             <a href="https://www.github.com/" className='btn' target="_blank">GitHub</a>
             <a href="https://www.dribble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <video src={IMG4} controls autoPlay loop></video>
           </div>
             <h3>Fully Animation & Responsive using HTML, CSS & Javascript.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/kmwtsachin04/Animation" className='btn' target="_blank">GitHub</a>
             <a href="https://kmwtsachin04.github.io/Animation/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <video src={IMG5} controls autoPlay loop></video>
           </div>
             <h3>Create a Poetfolio Fully animated using HTML, CSS & JavaScript.</h3>
             <div className="project_item-cta">
             <a href="https://github.com/kmwtsachin04/Animation-Portfolio" className='btn' target="_blank">GitHub</a>
             <a href="https://kmwtsachin04.github.io/Animation-Portfolio/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article>
      {/* <article  className='project_item'>
           <div className="project_item-image">
            <img src={IMG6} alt="" />
           </div>
             <h3>Available for UI/UX & Front-End Project.</h3>
             <div className="project_item-cta">
             <a href="https://www.github.com/" className='btn' target="_blank">GitHub</a>
             <a href="https://www.dribble.com/" className='btn btn-primary' target="_blank">Live Demo</a>
             </div>
      </article> */}
       </div> 
   </section>
  )
}

export default Portfolio