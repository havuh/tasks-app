import { type ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'

import { ThemeProvider } from '@mui/material'
import theme from '@/lib/mui/theme'

const TestThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const renderWithTheme = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: TestThemeProvider, ...options })
