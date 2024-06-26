import Container from '../components/Container'
import useLanguage from '../context/LanguageContext'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const { language } = useLanguage()

  const footer = language?.footer

  return (
    <footer className='rounded-t-xl md:rounded-t-3xl bg-white dark:bg-[#1d1d1d] pb-24 md:pb-12 pt-10'>
      <Container>
        <div className='flex flex-col items-center'>
          <h4 className='text-xl md:text-2xl font-bold'>&#169; Constantina</h4>
          <ul className='flex flex-wrap gap-4 md:gap-6 py-4 capitalize'>
            {footer.map((item, i) => {
              switch (item) {
                case '/':
                  return (
                    <li className='text-blue-500' key={i}>
                      {item}
                    </li>
                  )
                case 'blogs':
                case 'blog':
                  return (
                    <li key={i}>
                      <a
                        href='http://radwritter.vercel.app'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item}
                      </a>
                    </li>
                  )
                default:
                  return (
                    <li key={i}>
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  )
              }
            })}
          </ul>
          <div className='flex gap-4 md:gap-6 pt-3 text-white'>
            <a
              href='https://github.com/Nina8507'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='w-6 h-6 md:h-5 md:w-5 box-content p-2 rounded-md bg-black' />
            </a>
            <a
              href='https://www.linkedin.com/in/constantina-tripon-937275130/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn className='w-6 h-6 md:h-5 md:w-5 box-content p-2 rounded-md bg-[#0e76a8]' />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
