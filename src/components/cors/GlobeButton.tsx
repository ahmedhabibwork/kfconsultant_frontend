"use client"
import { useRouter } from '@/hooks/useLocaleRouter';
import { Globe } from 'lucide-react'

const GlobeButton = () => {
  const {locale, changeLocale} = useRouter();
    return (
        <button onClick={() => changeLocale(locale === "ar" ? "en" : "ar")} type="button" className="flex items-center gap-2">
            <Globe />
            <p>{locale === "ar" ? "English" : "العربية"}</p>
        </button>)
}

export default GlobeButton