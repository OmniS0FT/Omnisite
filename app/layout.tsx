import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from '@/components/wrapper/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://omnibot.com.co/"),
  title: {
    default: 'Omnibot site',
    template: `%s | Omnibot site`
  },
  description: 'Bringing you in-browser and offline AI experience',
  openGraph: {
    description: 'This is an AI platform that uses WebGPU to run LLMs offline & privately in your browser, bringing you in-browser AI experience',
    images: ['https://res.cloudinary.com/diekemzs9/image/upload/v1732720769/Black_And_White_Y2K_Coming_Soon_Facebook_Cover_i77wvn.png'],
    url: 'https://omnibot.com.co/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OmniBot AI',
    description: 'This is an AI platform that uses WebGPU to run LLMs offline & privately in your browser, bringing you in-browser AI experience',
    siteId: "",
    creator: "@iBz-04",
    creatorId: "",
    images: ['https://res.cloudinary.com/diekemzs9/image/upload/v1732720769/Black_And_White_Y2K_Coming_Soon_Facebook_Cover_i77wvn.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

          <link
            rel="preload"
            href="https://res.cloudinary.com/diekemzs9/image/upload/v1732720769/Black_And_White_Y2K_Coming_Soon_Facebook_Cover_i77wvn.png"
            as="image"
          />
          <link
            rel="preload"
            href="https://res.cloudinary.com/diekemzs9/image/upload/v1732720769/Black_And_White_Y2K_Coming_Soon_Facebook_Cover_i77wvn.png"
            as="image"
          />
        </head>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  )
}