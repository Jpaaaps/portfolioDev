import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faReact, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons'

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
				<p className='job'> Développeur Web </p>
			</div>

			<div className="skills">
				<FontAwesomeIcon className='logo_skills' icon={faCode} size="4x" />
				<FontAwesomeIcon className='logo_skills' icon={faServer} size="4x" />
				<FontAwesomeIcon className='logo_skills' icon={faReact} size="4x" />
				<FontAwesomeIcon className='logo_skills' icon={faNodeJs} size="4x" />
				<FontAwesomeIcon className='logo_skills' icon={faPhp} size="4x" />
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
