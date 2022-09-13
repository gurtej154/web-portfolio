import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prototyping, Wireframing, User-flows, Mockups</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Design, Adobe XD and Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Agile</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Information Architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communication and Presentation</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MERNG Stack</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Third-party API Intergration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Server-side Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Quality Assurance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Computer Science applied to JavaScript</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe Creative Cloud</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Photoshop, Illustrator, Indesign, Lightroom</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Typography, Print Design, Photography</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Digital Creativity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interactive Media</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services