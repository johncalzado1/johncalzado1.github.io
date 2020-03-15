import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { skill_icons } from './skill_icons';

const SkillIcon = ({ src }) => (
  <img src={src} style={{ minWidth: '40px', minHeight: '40px', maxWidth: '60px', maxHeight: '40px', marginRight: '10px' }}></img>
)
const FlexItem = ({
  children,
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  direction = 'column',
  position = 'left',
  wrap = 'wrap'
}) => {
  let marginLeft = 'auto';
  let marginRight = 'auto';
  let marginTop = 'auto';
  let marginBottom = 'auto';

  switch (position) {
    case 'left':
      marginLeft = '0px';
      break;
    case 'right':
      marginRight = '0px';
      break;
    case 'top':
      marginTop = '0px';
      break;
    case 'bottom':
      marginBottom = '0px';
      break;
  }

  return (
    <div style={{
      display: 'flex',
      flexWrap: wrap,
      justifyContent: justifyContent,
      alignItems: alignItems,
      flexDirection: direction,
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight
    }}>
      {children}
    </div >
  )
}

export const Skills = () => {
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details>
          <h1>Skills</h1>
          <FlexItem>
            <FlexItem direction='row'>
              <FlexItem>
                <FlexItem><p>Programming - Python, JavaScript</p></FlexItem>
                <FlexItem direction='row'>
                  <SkillIcon src={skill_icons.python}></SkillIcon>
                  <SkillIcon src={skill_icons.javascript}></SkillIcon>
                </FlexItem>
              </FlexItem>
            </FlexItem>
            <FlexItem direction='row'>
              <FlexItem>
                <FlexItem><p>Data - ElasticSearch, Kibana</p></FlexItem>
                <FlexItem direction='row'>
                  <SkillIcon src={skill_icons.elasticsearch7}></SkillIcon>
                  <SkillIcon src={skill_icons.kibana}></SkillIcon>
                </FlexItem>
              </FlexItem>
            </FlexItem>
            <FlexItem direction='row'>
              <FlexItem>
                <FlexItem><p>Programming - React, Django</p></FlexItem>
                <FlexItem direction='row'>
                  <SkillIcon src={skill_icons.react}></SkillIcon>
                  <SkillIcon src={skill_icons.django}></SkillIcon>
                </FlexItem>
              </FlexItem>
            </FlexItem>
            <FlexItem direction='row'>
              <FlexItem>
                <FlexItem><p>Infrastructure - LXD, VirtualBox</p></FlexItem>
                <FlexItem direction='row'>
                  <SkillIcon src={skill_icons.lxd}></SkillIcon>
                  <SkillIcon src={skill_icons.virtualbox}></SkillIcon>
                </FlexItem>
              </FlexItem>
            </FlexItem>
            <FlexItem direction='row'>
              <FlexItem>
                <FlexItem><p>Other - Ansible, AWX, Appium</p></FlexItem>
                <FlexItem direction='row' wrap='nowrap'>
                  <SkillIcon src={skill_icons.ansible}></SkillIcon>
                  <SkillIcon src={skill_icons.awx}></SkillIcon>
                  <SkillIcon src={skill_icons.appium}></SkillIcon>
                </FlexItem>
              </FlexItem>
            </FlexItem>
          </FlexItem>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
}
