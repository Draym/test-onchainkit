'use client'

import type { ThemeProviderProps } from 'next-themes'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import * as React from 'react'
import { HeroUIProvider } from '@heroui/system'
import { useRouter } from 'next/navigation'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import { baseSepolia } from 'viem/chains'
import publicEnv from '@/config/publicEnv';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter()

  return (
    <OnchainKitProvider
      apiKey={publicEnv.onchainKitApiKey}
      chain={baseSepolia}
      config={{
        appearance: {
          name: 'Your App Name',        // Displayed in modal header
          logo: 'https://your-logo.com',// Displayed in modal header
          mode: 'auto',                 // 'light' | 'dark' | 'auto'
          theme: 'default'             // 'default' or custom theme
        },
        // configure the wallet modal below
        wallet: {
          display: 'modal',
          termsUrl: 'https://...',
          privacyUrl: 'https://...'
        }
      }}
    >
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>
                {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </OnchainKitProvider>
  )
}
