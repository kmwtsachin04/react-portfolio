import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/ss.png'
import HeaderSocial from './HeaderSocial'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Header = () => {
  const [text] = useTypewriter ({ 
    words:['Fullstack Developer',
            "Web Developer",
            "Backend Developer",
            "Coder",
            "Java With DSA"
              ],
              loop:{},
              typeSpeed:180,
              delaySpeed:50
  })
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Sachin Kumawat</h1>
            <h5 className='text-lightt'> <span className='role'>I'm a </span>{text}
            <span className='role'>< Cursor cursorStyle="|"/></span>
            </h5>
            <CTA/>
            <HeaderSocial/>

            <div className="me">
                <img src={ME} alt="" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>

    </header>
  )
}

export default Header