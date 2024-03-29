import { createContext, useContext, useState } from 'react'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai'
import { SiJavascript } from 'react-icons/si'
import { FaGraduationCap } from 'react-icons/fa'
import { MdOutlineContacts } from 'react-icons/md'

import wms from '../assets/projects/wms.webp'
import fms from '../assets/projects/fms.webp'
import greenhouse from '../assets/projects/green.webp'
import andro from '../assets/projects/android.webp'
import movie from '../assets/projects/movie.png'
import data from '../assets/projects/data.webp'

import tailwind from '../assets/skills/tailwind.svg'
import react from '../assets/skills/react.svg'
import node from '../assets/skills/nodejs.png'
import js from '../assets/skills/js.svg'
import java from '../assets/skills/java.svg'
import postgresql from '../assets/skills/postgresql.svg'
import astah from '../assets/skills/astah.svg'
import scrum from '../assets/skills/scrum.svg'
import blazor from '../assets/skills/c-sharp.svg'
import dotnet from '../assets/skills/docker.svg'
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
import githubActions from '../assets/skills/github-action.svg'
import docker from '../assets/skills/docker.svg'
import py from '../assets/skills/python.svg'

const sep2 = {
  img: wms,
  linkDemo: 'https://github.com/Nina8507/Sep2.Project',
  linkRepo: 'https://github.com/Nina8507/Sep2.Project',
  stack: [
    {
      icon: java,
    },
    {
      icon: postgresql,
    },
    {
      icon: astah,
    },
    {
      icon: scrum,
    },
  ],
}
const sep3 = {
  img: fms,
  linkDemo: 'https://github.com/Fraektsvin/Group6_fifthVersion/tree/main/Group6System-main/Group6System-main',
  linkRepo: 'https://github.com/Fraektsvin/Group6_fifthVersion/tree/main/Group6System-main/Group6System-main',
  stack: [
    {
      icon: java,
    },
    {
      icon: blazor,
    },
    {
      icon: rest, 
    },
    {
      icon: dotnet,
    },
    {
      icon: springboot,
    },
    {
      icon: scrum,
    },
  ],
}
const sep4 = {
  img: greenhouse,
  linkDemo: 'https://projects-inky.vercel.app/loraPage',
  linkRepo: 'https://github.com/GreenHouseSEP4',
  stack: [
    {
      icon: springboot,
    },
    {
      icon: blazor,
    },
    {
      icon: android, 
    },
    {
      icon: c,
    },
    {
      icon: java, 
    },
    {
      icon: aws, 
    },
    {
      icon: ssms, 
    },
    {
      icon: powerBI, 
    },
    {
      icon: scrum,
    }, 
    {
      icon: astah,
    },
  ],
}
const easypay = {
  img: andro,
  linkDemo: 'https://www.youtube.com/watch?v=tMAP2yxtYUk',
  linkRepo: 'https://github.com/JustForUs2/EasyPay',
  stack: [
    {
      icon: android,
    },
    {
      icon: gradle,
    },
    {
      icon: firebase,
    },
    {
      icon: astah, 
    },
  ],
}
const sep6 = {
  img: movie,
  linkDemo: 'https://best-movies-js.vercel.app/',
  linkRepo: 'https://github.com/SEP6-BestMovies/best-movies-js', 
  stack: [
    {
      icon: react,
    },
    {
      icon: tailwind,
    },
    {
      icon: node,
    },
    {
      icon: js,
    },
    {
      icon: firebase,
    },
    {
      icon: googleCloud,
    },
    {
      icon: githubActions,
    },
    {
      icon: docker, 
    },
  ],
}
const bachelor = {
  img: data, 
  linkDemo: 'https://projects-inky.vercel.app/bachelorPage',
  linkRepo: 'https://github.com/Purple-Wizard/BPR',
  stack: [
    {
      icon: py,
    }, 
    {
      icon: docker,
    },
  ],
}

const english = {
  country: 'en',
  header: {
    navbar: [
      {
        icon: AiOutlineHome,
      },
      {
        icon: AiOutlineUser,
      },
      {
        icon: FaGraduationCap,
      },
      {
        icon: SiJavascript,
      },
      {
        icon: AiOutlineFundProjectionScreen,
      },
      {
        icon: MdOutlineContacts,
      },
    ],
    buttonDownload: 'Download Resume',
  },
  about: {
    title: 'About',
    paragraf1:
      'My colleagues describe me as a committed and reliable professional, the "doer" of the team, always ready to dive headfirst when a challenge arises in the work environment.',
    paragraf2:
      'Ambitious and with a strong work ethic, I am continually seeking ways to positively contribute to the success of the team and the projects we deliver. Being detail oriented is part of my way of working, where every aspect of a project is analysed and addressed with precision, leaving no room for oversights.',
  },
  education: {
    title: 'Education',
    formal: [
      {
        title: 'Bachelors in Software Engineering',
        date: '2020 - 2024',
        description: 'Computer Science',
      },
      {
        title: 'Bachelors in International Sales and Marketing Management',
        date: '2016 - 2019',
            description: 'Business Administration',
        },
        {
            title: 'Bachelors in Communication and PR',
            date: '2008 - 2010',
            description: 'Effective communication strategies, strategic communication planning. ',
          },
    ],
    nonFormal: [
      {
        title: 'Semester 1',
        date: 'Feb 2020',
        description: 'Introduction to JAVA and UML. Single User Sistem. ',
      },
      {
        title: 'Semester 2',
        date: 'Aug 2020',
        description: 'Agile Methodologies, Software development with UML and JAVA, SOLID and Design Principals , RMDBS. Client - Server System. ',
      },
      {
        title: 'Semester 3',
        date: 'Feb 2021',
        description: 'Networking and Security, .NET. Heterogeneous Systems. ',
      },
      {
        title: 'Semester 4',
        date: 'Aug 2021',
        description: 'Algorithms and Data Structures, Embedded Software, Data Analytics (Kimball), IoT Project. ',
      },
      {
        title: 'Semester 5',
        date: 'Feb 2022',
        description: 'Internship - Data Engineer at Systematic ApS. ',
        },
        {
            title: 'Semester 6',
            date: 'Aug 2022',
            description: 'Data Science: Machine Learning and Linear Algebra. Background description for bachelor thesis. ',
        },
        {
            title: 'Semester 7',
            date: 'Feb 2023',
            description: 'Bachelors Thesis: Dimensionality Reduction with Binary Constraint. Autoencoder and Binary Hashing. ',
        },
    ],
  },
  skills: {
    title: 'Skills',
    tab: ['Language', 'Framework/Library', 'CI/CD', 'Tools' , 'OS'],
  },
  projects: {
    title: 'Projects',
    works: [
        {
        name: 'Warehouse System - Client/Server Application',
        description:
          'The system supports internal communication between the administration, management, and warehouse department.',
        ...sep2,
      },
      {
        name: 'Banking System ',
        description: 'Web application that monitor financial transactions. ',
        ...sep3,
      },
      {
        name: 'LoRa Greenhouse Project ',
        description: 'Automated system through the use of wireless sensors connected to the IoT.',
        ...sep4,
      },
      {
        name: 'EasyPay Android App',
        description: 'Financial application focused on tracking expenses with interactive budgets. ',
        ...easypay,
      },
      {
        name: 'Best Movies',
        description: 'The cloud infrastructure surrounds a social platform for movie enthusiasts, capable of displaying movie related data collected from public APIs. ',
        ...sep6,
      },
      {
        name: 'Bachelor Thesis',
        description: 'Pipeline for dimensionality reduction, combining data engineering with data science to solve the storage requirements when working with large scale vectors.',
        ...bachelor,
      },
    ],
  },
  contact: {
    title: 'Contact',
    cardContact: 'Contact',
    buttonSend: ['Send', 'Wait'],
    info: {
      success: 'Successfully sent!',
      error: 'Failed to send!',
      warning: 'Please enter correctly!',
    },
    input: [
      {
        span: 'Name',
        placeholder: 'Enter a name',
      },
      {
        span: 'Email',
        placeholder: 'Enter a email',
      },
      {
        span: 'Message',
        placeholder: 'Write your message',
      },
    ],
  },
  footer: [

  ],
}

const Context = createContext({})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(english)

  const value = {
    english,
    language,
    setLanguage,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default function useLanguage() {
  return useContext(Context)
}
