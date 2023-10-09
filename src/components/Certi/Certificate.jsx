import React from 'react'
import './Certificate.css'
import IMG1 from '../../assets/Certificate7.png'
import IMG2 from '../../assets/Certificate2.jpg'
import IMG3 from '../../assets/Certificate3.jpg'
import IMG4 from '../../assets/Certificate4.jpg'
import IMG5 from '../../assets/Certificate5.jpg'
import IMG6 from '../../assets/Certificate8.png'




const Certificate = () => {
  return (
  <section id='certificate'>
       <h5>My Work</h5>
       <h2>Certificates</h2>
     <div className="container project_container">
      <article  className='project_item'>
           <div className="project_item-image">
           <img src={IMG1} alt="" />
           </div>
             <h3>FULL STACK WEB DEVELOPMENT Certifiction with PW Skills.</h3>
             <div className="project_item-cta">
             <a href={IMG1} className='btn btn-primary' >View Certificate</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
            <img src={IMG6} alt="" />
           </div>
             <h3>Certificate of Completion of JAVA Organized by HackerRank.</h3>
             <div className="project_item-cta">
             <a href={IMG6} className='btn btn-primary' >View Certificate</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
           <img src={IMG2} alt="" />
           </div>
             <h3>Participation Certificate with Unstop flipkart.</h3>
             <div className="project_item-cta">
             <a href={IMG2} className='btn btn-primary' >View Certificate</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
           <img src={IMG3} alt="" />
           </div>
             <h3>Participation Certificate in offline Mode with DSA Workshop.</h3>
             <div className="project_item-cta">
             <a href={IMG3} className='btn btn-primary' >View Certificate</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
           <img src={IMG4} alt="" />
           </div>
             <h3>Training Certificate of core JAVA Organized by LearVern.</h3>
             <div className="project_item-cta">
             <a href={IMG4} className='btn btn-primary' >View Certificate</a>
             </div>
      </article>
      <article  className='project_item'>
           <div className="project_item-image">
           <img src={IMG5} alt="" />
           </div>
             <h3>Certificate of White Hat Hacker and Pen Tester.</h3>
             <div className="project_item-cta">
             <a href={IMG5} className='btn btn-primary' >View Certificate</a>
             </div>
      </article>
     
       </div> 
   </section>
  )
}

export default Certificate;