import React from "react";
import "./tesimonial.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.jpg";
import AVTR5 from "../../assets/avatar5.jpg";
import AVTR6 from "../../assets/avatar6.jpg";
import AVTR7 from "../../assets/avatar7.jpg";


// import Swiper core and required modules
import {Pagination} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'; // Use 'swiper/swiper-bundle.css' for the bundled version of Swiper


const data = [
  {
      avatar: AVTR1,
      name: 'Vijay Choudhary',
      review: 'The web development service by Sachin Kumawat is top-notch! He is highly skilled, professional, and efficient. He was able to deliver the project on time and exceeded our expectations. I highly recommend him for any web development needs.'
  },
   {
      avatar: AVTR2,
      name: "Dharmveer Choudhay",
      review: 'The web development service provided by Sachin Kumawat is of exceptional quality. He possesses a high level of skill, professionalism, and efficiency. Furthermore, he was able to deliver the project within the designated timeframe and surpassed our expectations. I strongly endorse him for any web development requirements.'
   },
   {
      avatar: AVTR3,
      name: "Sandeep Mahawar",
      review: 'The web development service by Sachin Kumawat is top-notch! He is highly skilled, professional, and efficient. He was able to deliver the project on time and exceeded our expectations. I highly recommend him for any web development needs.'


  },
   {
      avatar: AVTR4,
      name: "Anandpal Singh Rathore",
      review: 'The web development service provided by Sachin Kumawat is of exceptional quality. He possesses a high level of skill, professionalism, and efficiency. Furthermore, he was able to deliver the project within the designated timeframe and surpassed our expectations. I strongly endorse him for any web development requirements.'
  },
  {
    avatar: AVTR5,
    name: "Rajveer Kumawat",
    review: 'I highly recommend Sachin Kumawat for all your UI design and wireframing needs. He is incredibly talented and has a keen eye for detail. He has been able to bring our vision to life with ease and has exceeded our expectations. He is a true professional and we look forward to working with him again in the future.'
},
{
  avatar: AVTR6,
  name: "Sunil Kumar",
  review: 'I strongly endorse Sachin Kumawat for any requirements related to UI design and wireframing. His exceptional talent and meticulous attention to detail are truly remarkable. He has effortlessly transformed our vision into reality and surpassed our expectations. He is an epitome of professionalism and we eagerly anticipate collaborating with him in the future.'
},
{
  avatar: AVTR7,
  name: "Tanishq Sharma",
  review: 'For all issues related to UI design and wireframing, contact Sachin Kumawat. His extraordinary talent and meticulous attention to detail are truly remarkable. He effortlessly turned our vision into reality and exceeded our expectations. He is the epitome of professionalism and we look forward to working with him in the future.'
},
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testimonials_container"  
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      Pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide article key={index} className="testinomial">
        <div className="client_avatar">
             <img src={avatar} alt=""/>
        </div>
          <h5 className="client_name">{name}</h5>
          <small className="client_review">
            {review}
          </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonial;