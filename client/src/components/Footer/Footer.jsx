import React from 'react'
import footercss from './Footer.module.css'

import { FaBeer } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
export default function Footer() {
  return (
    <div className={footercss.footer}><a className={footercss.link} href="https://github.com/Elvedin123"><AiFillGithub /></a>
      <a className={footercss.link} href='https://www.linkedin.com/in/elvedincekic12/'><AiFillLinkedin /></a>
      <a className={footercss.link} href="https://www.instagram.com/eelvedinn__/"><AiFillInstagram /></a>
    </div>
  )
}
