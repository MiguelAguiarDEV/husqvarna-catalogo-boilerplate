import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'

// https://dev.to/adrai/static-html-export-with-i18n-compatibility-in-nextjs-8cd

export const useRedirect = (to?: any) => {
  const router = useRouter()
  to = to || router.asPath

  // language detection
  useEffect(() => {
    let detectedLng = languageDetector.detect()
    if (to.startsWith('/' + detectedLng) && router.route === '/404') {
      router.replace('/' + detectedLng + router.route)
      return
    }

    if(!detectedLng){
      return
    }

    if(detectedLng === 'es-ES'){
      detectedLng = 'es'
    }
  
    languageDetector.cache?.(detectedLng);
    router.replace('/' + detectedLng + to)
  })

  return null
};

export const Redirect = () => {
  useRedirect()
  return null
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to?: any) => () => {
  useRedirect(to)
  return null
}
