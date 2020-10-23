import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Navbar from './Navbar'

import './Contact.css'

const Contact = () => {

		return (
		 <div className='container-contact'>
			<div className='navbarContact'>
				<Navbar />
			</div>
			<div className='monContact'>
				<div className='monMail'>
					<a className='mail' href="mailto:jpgerard87@gmail.com">
						<FontAwesomeIcon className='envelop' icon={faPaperPlane} size='2x'/>
						Un message pour moi?
					</a>
				</div>
				<div className='monTel'>
					<a className='telephone' href='tel:0623074733'>
						<FontAwesomeIcon className='phone' icon={faPhoneAlt} size='2x' />
					M'appeler?
					</a>
				</div>
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

export default Contact
