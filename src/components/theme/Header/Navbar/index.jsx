import React from 'react'
import { Link, withPrefix } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<img src={withPrefix("/") + "favicon/favicon-512.png"}></img>
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
