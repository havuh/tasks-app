import type { AppProps } from 'next/app'

import { type EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'
import { LayoutProvider } from '@core/contexts/layout'
import { type PageProps } from '@core/types'
import { GlobalAlert } from '@/components/common'
import theme from '@/lib/mui/theme'

import '@/styles/app.scss'

interface MyAppProps extends AppProps {
  pageProps: PageProps
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache, pageProps } = props
  const { deviceSelectors } = pageProps

  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutProvider deviceSelectors={deviceSelectors}>
          <Component {...pageProps} />
          <GlobalAlert />
        </LayoutProvider>
      </ThemeProvider>
    </AppCacheProvider>
  )
}
