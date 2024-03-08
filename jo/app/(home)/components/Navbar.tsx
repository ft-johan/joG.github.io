import Link from 'next/link'
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

export default function Navbar() {
    const socials = [
        {
            link : "",
            label : "",
            icon : SiGithub,
        },
        {
            link : "",
            label : "",
            icon : SiLinkedin,
        },
        {
            link : "",
            label : "",
            icon : SiInstagram,
        },
    ]
  return (
    <nav>
<h1>Johan George</h1>
<div>
    {socials.map((social)=>
    {
        return <Link></Link>
    })}
</div>
    </nav>
  )
}
