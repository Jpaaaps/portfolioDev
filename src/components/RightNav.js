import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(9, 10, 52, 0.95);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
					<NavLink to='/' activeClassName='active'>Accueil</NavLink>
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
    </Ul>
  )
}

export default RightNav
