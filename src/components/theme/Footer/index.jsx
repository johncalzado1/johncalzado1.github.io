import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'
import { withPrefix } from 'gatsby';
import { FlexItem } from 'components/common/FlexItem';

export const Footer = () => {
	return (
		<Wrapper>
			<Flex as={Container}>
				<Details>
					<h2>John Calzado</h2>
					<span>
						Theme derived from <a target="_blank" href="https://github.com/smakosh/gatsby-portfolio-dev">Smakosh</a>.
						Art illustrations from <a target="_blank" href="undraw.co">unDraw</a>.
					</span>
				</Details>
				<Links>
					<FlexItem direction="row">
						{social.map(({ id, name, link, icon }) => (

							<a
								style={{ marginLeft: '0.25rem', marginRight: '0.25rem' }}
								key={id}
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`follow me on ${name}`}
							>
								<img width="32" height="32" src={withPrefix("/") + icon} alt={name} />
							</a>
						))}
					</FlexItem>
				</Links>
			</Flex >
		</Wrapper >
	)
}
