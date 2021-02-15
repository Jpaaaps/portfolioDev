import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import photo from '../pictures/profilepic.jpg'

import './About.css'

const About = () => {

function handleClick(e){
		e.preventDefault();
		window.open('https://drive.google.com/file/d/16MU3qnoWmOJHvi-kzqn3XAI_tAIHCAz4/view?usp=sharing', '_blank', 'noopener noreferrer');
	}

		return (
			<div className='container-about'>

				<div className='navbarAbout'>
					<Navbar />
				</div>
				<div className='myProfile'>

					<div className='profile'>

						<img className='imgPro' src={photo} alt='moi'/>
						<p className='card'>Responsable logistique et musicien autodidacte acharné, je poursuis mon parcours dans le domaine du développement web depuis le début d'année 2020 dans le cadre d'une reconversion professionnelle. J'ai eu la chance de suivre une formation de 5 mois à la <span><a href='https://www.wildcodeschool.com/fr-FR' target='_blank' rel="noopener noreferrer">Wild Code School</a></span>, et en parallèle diverses formations sur des sites tels que <span><a href='https://www.udemy.com' target='_blank' rel="noopener noreferrer">Udemy</a></span> pour approfondir mes connaissances, notamment en apprenant de nouveaux langages tes-ls que PHP. 
						Je suis désormais Développeur Web basé dans la région de Marseille. 
						<Link to='/contact'><p className='linkTo'>Déjà envie de me contacter?</p></Link>
						</p>

					</div>

					<button onClick={handleClick}>Voir mon CV</button>

				</div>

			</div>
		)
}

export default About
