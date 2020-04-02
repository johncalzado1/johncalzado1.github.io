import React from 'react'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { FlexItem } from '../../common/FlexItem'
import { skill_icons } from './skill_icons';

const SkillIcon = ({ src }) => (
  <img src={src} style={{ minWidth: '40px', minHeight: '40px', maxWidth: '50px', maxHeight: '40px', marginRight: '10px' }}></img>
)
export const Skills = () => {
  return (
    <Wrapper id="skills">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Software developer!" />
        </Thumbnail>
        <Details>
          <FlexItem>
            <FlexItem><h1>Skills</h1></FlexItem>
            <FlexItem direction="row" wrap='nowrap'>
              <FlexItem direction='row' wrap='nowrap'>
                <SkillIcon src={skill_icons.python}></SkillIcon>
                <SkillIcon src={skill_icons.javascript}></SkillIcon>
              </FlexItem>
              <FlexItem grow={true}><p><strong>Programming</strong> - Python, JavaScript</p></FlexItem>
            </FlexItem>
            <FlexItem direction="row" wrap='nowrap'>
              <FlexItem direction='row' wrap='nowrap'>
                <SkillIcon src={skill_icons.elasticsearch7}></SkillIcon>
                <SkillIcon src={skill_icons.kibana}></SkillIcon>
              </FlexItem>
              <FlexItem grow={true}><p><strong>Data</strong> - ElasticSearch, Kibana</p></FlexItem>
            </FlexItem>
            <FlexItem direction="row" wrap='nowrap'>
              <FlexItem direction='row' wrap='nowrap'>
                <SkillIcon src={skill_icons.react}></SkillIcon>
                <SkillIcon src={skill_icons.django}></SkillIcon>
              </FlexItem>
              <FlexItem grow={true}><p><strong>Web Frameworks</strong> - React, Django</p></FlexItem>
            </FlexItem>
            <FlexItem direction='row' wrap='nowrap'>
              <FlexItem direction='row' wrap='nowrap'>
                <SkillIcon src={skill_icons.lxd}></SkillIcon>
                <SkillIcon src={skill_icons.virtualbox}></SkillIcon>
              </FlexItem>
              <FlexItem grow={true}><p><strong>Infrastructure</strong> - LXD, VirtualBox</p></FlexItem>
            </FlexItem>
            <FlexItem direction='row' wrap='nowrap'>
              <FlexItem direction="column" noMargin>
                <FlexItem direction="row" wrap="nowrap">
                  <SkillIcon src={skill_icons.ansible}></SkillIcon>
                  <SkillIcon src={skill_icons.appium}></SkillIcon>
                </FlexItem>
                <FlexItem direction="row" wrap="nowrap">
                  <SkillIcon src={skill_icons.awx}></SkillIcon>
                  <SkillIcon src={skill_icons.git}></SkillIcon>
                </FlexItem>
              </FlexItem>
              <FlexItem position='top' grow={true} noMargin><p><strong>Other</strong> - Ansible, Appium, AWX, Git</p></FlexItem>
            </FlexItem>
            {/* <FlexItem direction='row'>
              <p>Other: Gatsby, Jekyll, HTML, CSS, Java, Oracle SQL, Wordpress, Git, Postman, adobe fireworks, Autodesk AutoCAD, Autodesk Inventor, DesignSpark PCB</p>
            </FlexItem> */}
          </FlexItem>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  )
}
