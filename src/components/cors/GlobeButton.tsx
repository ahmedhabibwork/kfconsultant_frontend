import { useLocaleToggle } from '@/hooks/useLocaleToggle'
import { Globe } from 'lucide-react'
import React from 'react'

const GlobeButton = () => {
    const { toggleLocale } = useLocaleToggle()
    return (
        <button onClick={toggleLocale} type="button" className="flex items-center gap-2">
            <Globe />
            <p>English</p>
        </button>)
}

export default GlobeButton