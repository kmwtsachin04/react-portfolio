import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header_social'>
    <a href="https://www.linkedin.com/in/sachin-kumawat-946269212" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/kmwtsachin04" target="_blank"><FaGithub/></a>
    <a href="https://instagram.com/itx_sachin04?igshid=NzZlODBkYWE4Ng==" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial;