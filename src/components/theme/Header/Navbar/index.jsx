import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
				<img style={{maxWidth: '50px'}} src={withPrefix("/") + "favicon/favicon-512.png"}></img>
				<p style={{marginLeft: '0.75rem'}}>John Calzado</p>
			</div>
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
