import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import Skill from '../components/Skill'
import useLanguage from '../context/LanguageContext'

import tailwind from '../assets/skills/tailwind.svg'
import react from '../assets/skills/react.svg'
import node from '../assets/skills/nodejs.png'
import js from '../assets/skills/js.svg'
import java from '../assets/skills/java.svg'
import postgresql from '../assets/skills/postgresql.svg'
import astah from '../assets/skills/astah.svg'
import scrum from '../assets/skills/scrum.svg'
import blazor from '../assets/skills/c-sharp.svg'
import dotnet from '../assets/skills/dot-net.svg'
import springboot from '../assets/skills/spring-boot.svg'
import powerBI from '../assets/skills/powerBi.svg'
import ssms from '../assets/skills/microsoft-sql-server-logo-svgrepo-com.svg'
import rest from '../assets/skills/rest-api.svg'
import c from '../assets/skills/C.svg'
import android from '../assets/skills/android.svg'
import aws from '../assets/skills/aws.svg'
import firebase from '../assets/skills/firebase.svg'
import gradle from '../assets/skills/gradle.svg'
import googleCloud from '../assets/skills/google-cloud.svg'
import githubActions from '../assets/skills/github-actions.png'
import docker from '../assets/skills/docker.svg'
import py from '../assets/skills/python.svg'
import windows from '../assets/skills/windows.svg'
import macos from '../assets/skills/apple.svg'
import rust from '../assets/skills/rust.svg'
import maven from '../assets/skills/maven.svg'
import analysis from '../assets/skills/analysis_services.svg'
import azure from '../assets/skills/azure.svg'
import git from '../assets/skills/git.svg'
import intelij from '../assets/skills/IntelliJ_IDEA_Icon.svg'
import jupyter from '../assets/skills/jupyter.svg'
import linux from '../assets/skills/linux.svg'
import next from '../assets/skills/next.svg'
import postman from '../assets/skills/postman.png'
import tenserflow from '../assets/skills/tensorflow.svg'
import vscode from '../assets/skills/vscode.svg'
import pytorch from '../assets/skills/pyTorch.svg'
import atlassisn from '../assets/skills/atlassian.svg'
import insomia from '../assets/skills/insomnia.svg'
import sklearn from '../assets/skills/Scikit_learn_logo.svg'

import { useState } from 'react'

const skill = [
  [
    { name: 'Java', img: java, },
    { name: 'C#', img: blazor, },
    { name: 'Python', img: py, },
    { name: 'SQL', img: postgresql, },
    { name: 'Rust', img: rust, },
    { name: 'C', img: c, },
    { name: 'Javascript', img: js, },
  ],
  [
    { name: 'Maven', img: maven, },
    { name: 'Spring Boot', img: springboot, },
    { name: 'Gradle', img: gradle, },
    { name: 'Android', img: android, },
    { name: 'Node.Js', img: node, },
    { name: '.NET', img: dotnet, },
    { name: 'Jupyter Notebook', img: jupyter, },
    { name: 'Scikit Learn', img: sklearn, },
    { name: 'TensorFlow', img: tenserflow, },
    { name: 'PyTorch', img: pytorch, },
    { name: 'React', img: react, },
    { name: 'Tailwind', img: tailwind, },
    { name: 'Next.Js', img: next, },
  ],
  [
    { name: 'GitHub Actions', img: githubActions, },
    { name: 'Google Cloud', img: googleCloud, },
    { name: 'Amazon Web services', img: aws, },
  ],
  [
    { name: 'Astah UML', img: astah, },
    { name: 'Scrum', img: scrum, },
    { name: 'Microsoft SQL Server',img: ssms, },
    { name: 'Azure SQL Database', img: azure, },
    { name: 'Microsoft PowerBI', img: powerBI, },
    { name: 'Google Firebase', img: firebase, },
    { name: 'Microsoft Analysis Services', img: analysis, },
    { name: 'Docker', img: docker, },
    { name: 'Git', img: git, },
    { name: 'Postman', img: postman, },
    { name: 'Insomnia', img: insomia, } ,
    { name: 'JetBrains', img: intelij, },
    { name: 'Vs Code', img: vscode, },
    { name: 'Atlassian', img: atlassisn, },
    
  ],
  [
    { name: 'Linux', img: linux, },
    { name: 'MacOS', img: macos, },
    { name: 'Windows', img: windows, },
  ],
]

const [languageList, framework, ci_cd, tools , os] = skill

export default function SkillSection() {
  const { language } = useLanguage()
  const [count, setCount] = useState(1)

  const title = language?.skills?.title
  const description = language?.skills?.description
  const tab = language?.skills?.tab

  return (
    <Section id='skills'>
      <HeaderSection title={title} description={description} />
      <div className='overflow-hidden overflow-x-scroll'>
        <ul className='flex text-center w-[38rem] sm:w-auto'>
          {tab.map((item, i) => {
            return (
              <li
                onClick={() => setCount(i + 1)}
                key={item}
                className={`${
                  count == i + 1 &&
                  'border-b-2 border-b-blue-600 text-blue-600 hover:text-blue-600 hover:border-blue-600'
                } flex-1 cursor-pointer border-b py-4 font-semibold duration-0 hover:text-blue-500 hover:border-blue-500`}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      {count == 1 && <Skill list={languageList} />}
      {count == 2 && <Skill list={framework} />}
      {count == 3 && <Skill list={ci_cd} />}
      {count == 4 && <Skill list={tools} />}
      {count == 5 && <Skill list={os} />}
    </Section>
  )
}
