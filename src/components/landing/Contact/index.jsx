import React from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import NetlifyContactForm from './NetlifyContactForm'
import FormSpreeContactForm from './FormSpreeContactForm'

console.log("form mode:", process.env.GATSBY_FORM_MODE)

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      {
        (process.env.GATSBY_FORM_MODE === "netlify") ?
          (<NetlifyContactForm />)
          : (process.env.GATSBY_FORM_MODE === "formspree") ?
            (<FormSpreeContactForm/>)
            : ("DIDN'T SPECIFY CONTACTS FORM TYPE")
      }
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
)
