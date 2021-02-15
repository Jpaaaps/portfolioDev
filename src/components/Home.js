import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Navbar from './Navbar'

import './Home.css'

const Home = () => {

		return (
		 <div className='container-home'>
			<div className='navbarAbout'>
				<Navbar />
			</div>
			<div className='me'>
				<h2 className='name'>Jean Philippe GERARD</h2>
				<p className='job'>| Développeur Web |</p>
				{/* <p className='job'>React.js | Node.js</p> */}
			</div>
			<div className='logos'>
				<a href='https://github.com/Jpaaaps' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon className='logo_sites' icon={faGithubSquare} size="2x" />
				</a>
				<a href='https://www.linkedin.com/in/jeanphilippegerard/' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon className='logo_sites' icon={faLinkedin} size="2x" />
				</a>
			</div>
		 </div>
		)
}

export default Home
