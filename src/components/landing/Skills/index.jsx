import React from 'react'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { Accordian } from '../../common/Accordian';
import { FlexItem } from '../../common/FlexItem'
import { skill_icons } from './skill_icons';

const SkillIcon = ({ src }) => (
  <img src={src} style={{ minWidth: '40px', minHeight: '40px', maxWidth: '60px', maxHeight: '40px', marginRight: '10px' }}></img>
)
export const Skills = () => {
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details>
          <FlexItem>
            <FlexItem><h1>Skills</h1></FlexItem>
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
                <FlexItem><p>Web Frameworks - React, Django</p></FlexItem>
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
            <FlexItem direction='row'>
              {/* <p>Other: Gatsby, Jekyll, HTML, CSS, Java, Oracle SQL, Wordpress, Git, Postman, adobe fireworks, Autodesk AutoCAD, Autodesk Inventor, DesignSpark PCB</p> */}
            </FlexItem>
          </FlexItem>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
}
