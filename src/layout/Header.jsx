import Navbar from './Navbar'
import Container from '../components/Container'
import useLanguage from '../context/LanguageContext'

import { TypeAnimation } from 'react-type-animation'

import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaFileDownload } from 'react-icons/fa'

export default function Header() {
  const { language } = useLanguage()
  const paragraf = language?.header?.headParagraf
  const buttonDownload = language?.header?.buttonDownload

  return (
    <header id='home' className='min-h-screen flex items-center'>
      <Navbar />
      <Container>
        <div className='relative mb-14 mt-4 md:m-0'>
          <div className='absolute flex flex-col gap-4 md:gap-6 top-12 sm:top-16 lg:top-20'>
            <a
              href='https://github.com/Nina8507?tab=repositories'
              target='_blank'
              className='w-7 h-7'
            >
              <FiGithub className='w-7 h-7' />
            </a>
            <a
              href='https://www.linkedin.com/in/constantina-tripon-937275130/'
              target='_blank'
            >
              <FiLinkedin className='w-7 h-7' />
            </a>
          </div>
          <div className='flex justify-between gap-6 items-center md:ml-20 lg:ml-36 flex-col md:flex-row-reverse'>
            <img
              src='/photo.svg'
              className='profile-animation w-52 bg-black/ p-2 sm:w-64 lg:w-72 ml-12 md:ml-0'
            />
            <div className='self-stretch md:self-center flex justify-center'>
              <div>
                <h1 className='text-5xl font-rubik font-extrabold leading-[3.2rem] text-[#333] dark:text-white'>
                  Constantina Tripon
                </h1>
                <TypeAnimation
                  sequence={[
                    'Software Engineer',
                    2000,
                    'Backend Developer',
                    2000,
                    'Data Engineer',
                    2000,
                  ]}
                  wrapper='div'
                  className='text-2xl font-poppins font-bold py-3 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-green-400'
                  speed={200}
                  repeat={Infinity}
                />
                <p className='pb-2'>{paragraf}</p>
                {/* <div className='flex gap-2 flex-wrap py-2'>
                  <button>
                    <a
                      href='/CV.pdf'
                      download
                      className='flex items-center gap-2 rounded-lg px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:hover:bg-zinc-950 dark:bg-zinc-900 dark:border-zinc-700 border'
                    >
                      <FaFileDownload className='w-4 h-4' />
                      <span className='font-poppins'>{buttonDownload}</span>
                    </a>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
