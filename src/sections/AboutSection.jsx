import useLanguage from '../context/LanguageContext'
import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
export default function AboutSection() {
  const { language } = useLanguage()

  // ==== Language
  const title = language?.about?.title
  const description = language?.about?.description
  const paraf1 = language?.about?.paragraf1
  const paraf2 = language?.about?.paragraf2
  const paraf3 = language?.about?.paragraf3
  const paraf4 = language?.about?.paragraf4

  return (
    <Section id='about'>
      <HeaderSection title={title} description={description} />
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
        <img
          src='/photo2.jpeg'
          className='rounded-3xl w-60 md:w-auto md:max-w-sm'
        />
        <div className='flex-1'>
          <p>
            {paraf1}
            <br />
            <br/>
            {paraf2}
            <br />
            <br/>
            {paraf3}
            <br />
            <br/>
            {paraf4}
          </p>
        </div>
      </div>
    </Section>
  )
}
