import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineDribbbleSquare} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer"><AiOutlineDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials