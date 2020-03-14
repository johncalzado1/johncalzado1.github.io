import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { withPrefix } from 'gatsby';

console.log(process.env.GATSBY_FORM_MODE)

export default () => (
  <Layout>
    <link rel="shortcut icon" type="image/x-icon" href={withPrefix("/") + "favicon/favicon-512.png"}></link>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
