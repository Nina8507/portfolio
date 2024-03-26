import useLanguage from '../context/LanguageContext'
import { useState } from 'react'

export default function ToggleLanguage() {
  const [showDropDown, setShowDropDown] = useState(false)
  const { english, language, setLanguage } = useLanguage()

  const handleChange = (lang) => {
    setShowDropDown(false)
    if (lang === language.country) {
      return
    } else {
      setLanguage(english)
    }
  }

  return (
    <>

    </>
  )
}
