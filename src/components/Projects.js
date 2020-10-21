import React from 'react'
import CardProject from './CardProject'
import Navbar from './Navbar'

import pimp from '../pictures/PYWLogo.png'
import covid from '../pictures/covidrun.png'
import productcart from '../pictures/productcart.png'
import WLH from '../pictures/WLH.jpg'
import tictac from '../pictures/tictac.png'

import './Projects.css'

const projects = [
  { src: covid, urlDeployed: 'https://elegant-hypatia-f05ed3.netlify.app/', urlGithub: 'https://github.com/Jpaaaps/covidrun', name: 'CovidRun', description: 'Durant la formation, nous avons fait deux hackaton. Voici le premier, où nous nous sommes amusé à faire un snake mais version covid ! (eh oui, nous étions en plein confinement !)' },
  { src: pimp, urlGithub: 'https://drive.google.com/drive/folders/1IJDzqJSmsh1n__rzqOL6Ba22ZIn6z-OI', name: 'Pimp Your Waste', description: 'Troisième et dernier projet de ma formation, pour un client réel qui voulait un site interne de gestion de leur stock avec création d\'un front et d\'un back fonctionnel.'},
  { src: productcart, urlDeployed: 'https://festive-pike-347305.netlify.app/', urlGithub: 'https://github.com/Jpaaaps/dojo-react-product-cart', name: 'Dojo react product cart', description: 'Ce projet n\'en ai pas réellement un. Durant un dojo de l\'école nous devions créer un product cart, je te laisse tester les fonctionnalités' },
	{ src: WLH, urlDeployed: 'https://wild-heroes-league.netlify.app/', urlGithub: 'https://github.com/Jpaaaps/paris-0320-project2-WildHerosLeague', name: 'Wild Heroes League', description: 'C\'était le deuxième projet de groupe durant ma formation. Le choix était libre, nous avons décidé de faire un quizz à choix multiples sur le thème des Superhéros.'},
	{ src: tictac, urlGithub: 'https://github.com/Jpaaaps/test_tictactrip', name: 'Test site de réservation', description: 'Début d\'une reproduction  d\'un site de réservation de voyage, pas encore le temps de le términer.' }
]

const Projects = () => {

  return (
		<div className='container-projects'>
			<div className='navbarAbout'>
				<Navbar />
			</div>
			<div className='projectsList'>
      	{
        	projects.map((project, i) => 
						<CardProject key={i} src={project.src} urlDeployed={project.urlDeployed} urlGithub={project.urlGithub} name={project.name} description={project.description}/>
        	)
      	}
    	</div>
		</div>
  )
}

export default Projects
