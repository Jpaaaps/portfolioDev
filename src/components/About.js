import React from 'react'

import Navbar from './Navbar'
import photo from '../pictures/profilepic.jpg'

import './About.css'

const About = () => {

function handleClick(e){
		e.preventDefault();
		window.open('https://drive.google.com/file/d/18O7du9fqJV24p6dFW2NJv4kweBTpSanu/view?usp=sharing', '_blank');
	}

		return (
		 <div className='container-about'>
			<div className='navbarAbout'>
				<Navbar />
			</div>
			<hr/>
			<div className='myProfile'>
				<div className='profile'>
					<img src={photo} alt='moi'/>
					<p className='card'>Maintenant ma formation intensive à la Wild Code School terminée, je suis à la recherche d’un stage de développeur web pour continuer à étoffer mes connaissances et progresser.</p>
				</div>
				<button onClick={handleClick}>Voir mon CV</button>
			</div>
		 </div>
		)
}

export default About
