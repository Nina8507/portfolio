import { useState } from 'react'
import useLanguage from '../context/LanguageContext'
import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import Education from '../components/Education'

export default function EducationSection() {
  const { language } = useLanguage()
  const [tab, setTab] = useState(1)

  // ==== Language
  const title = language?.education?.title
  const description = language?.education?.description
  const nonFormal = language?.education?.nonFormal
  const formal = language?.education?.formal

  return (
    <Section id='education'>
      <HeaderSection title={title} description={description} />
      <div>
        <ul className='flex gap-4 md:gap-6 justify-center font-semibold text-black'>
          <li
            onClick={() => setTab(1)}
            className={`${
              tab === 1
                ? 'bg-blue-600 dark:bg-blue-600 text-white'
                : 'dark:bg-zinc-900 hover:bg-blue-200 dark:hover:bg-zinc-950'
            } px-4 py-2 bg-blue-100 dark:text-white cursor-pointer rounded-md`}
          >
            Education
          </li>
          <li
            onClick={() => setTab(2)}
            className={`${
              tab === 2
                ? 'bg-blue-600 dark:bg-blue-600 text-white'
                : ' dark:bg-zinc-900 hover:bg-blue-200 dark:hover:bg-zinc-950'
            } px-4 py-2 bg-blue-100 dark:text-white cursor-pointer rounded-md`}
          >
            Aquired Skills
          </li>
        </ul>
        <div className='pt-10'>
          {tab === 1 && <Education data={formal} />}
          {tab === 2 && <Education data={nonFormal} />}
        </div>
      </div>
    </Section>
  )
}
