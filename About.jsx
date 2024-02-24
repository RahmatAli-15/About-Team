import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="about">
    <div className='aboutTop'>
    <h1>About Us</h1>
    <h3>some text</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere corporis commodi, error possimus ipsam eligendi voluptatibus soluta labore assumenda est fugiat, eaque pariatur neque explicabo placeat animi quod nam provident</p>
    </div>
    <div className="aboutMain">
    <h1>Our Team</h1>
    <div className="row">
    <div className="column">
    <div className="card">
      <img src="/images/5.jpg" alt="Jane"/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="button">Contact</button></p>
        </Link>
      </div>
 
  </div>
  </div>
  <div className="column">
    <div className="card">
    <img src="/images/5.jpg" alt="Jane"/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="button">Contact</button></p>
        </Link>
      </div>
 
  </div>
  </div>
  <div className="column">
    <div className="card">
    <img src="/images/5.jpg" alt="Jane"/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <Link to='/contact'>
        <p><button className="button">Contact</button></p>
        </Link>
      </div>
 
  </div>
  </div>
  </div>
  
  </div>

</div>
  )
}

export default About
