import React from 'react'

import Navbar from './Navbar'

import './Home.css'

const Home = () => {

		return (
		 <div className='container-home'>
			<Navbar />
			<div className='myName'>
				<h2>Jean-Philippe GERARD</h2>
				<p>Développeur Web</p>
				<p>| React.js | Node.js | </p>
			</div>
		 </div>
		)
}

export default Home
