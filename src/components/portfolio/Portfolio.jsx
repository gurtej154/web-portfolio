import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.gif'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.gif'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Coinance - Crypto Price Tracker',
    github: 'https://github.com/gurtej154/Coinance',
    demo: 'https://coinance-crypto-tracker.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Textable - Text Editor',
    github: 'https://github.com/gurtej154/Textable-project',
    demo: 'https://textable-application.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Portfolio - Take 3',
    github: 'https://github.com/gurtej154/Web-Developer-Portfolio',
    demo: 'https://gurtej-singh-web-portfolio.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Self-care Blog - Healthy lifestyle',
    github: 'https://github.com/gurtej154/vigilance-fullstack',
    demo: 'https://vigiliantes-fullstack.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Instant Crypto - All things Crypto!',
    github: 'https://github.com/gurtej154/InstantCrypto',
    demo: 'https://gurtej154.github.io/InstantCrypto/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weatherex - Weather Webapp',
    github: 'https://github.com/gurtej154/Weatherex-project',
    demo: 'https://gurtej154.github.io/Weatherex-project/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio