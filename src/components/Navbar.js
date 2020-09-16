import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {

	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/' activeClassName='active'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/about' activeClassName='active'>À Propos</NavLink>
				</li>
				<li>
					<NavLink to='/project' activeClassName='active'>Mes Projets</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName='active'>Me Contacter</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
