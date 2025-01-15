import { type ReactElement } from 'react'
import { render, type RenderOptions } from '@testing-library/react'

import { LayoutProvider } from '@core/contexts/layout'

const mockLayoutProps = {
  deviceSelectors: {
    isMobile: true,
    isMobileOnly: true,
    isTablet: false,
    isDesktop: false,
  },
}

const TestLayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const { deviceSelectors } = mockLayoutProps

  return <LayoutProvider deviceSelectors={deviceSelectors}>{children}</LayoutProvider>
}

export const renderWithLayout = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: TestLayoutProvider, ...options })
