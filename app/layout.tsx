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
  description: 'A private AI that uses WebGPU to run LLMs natively & privately in your browser, bringing you in-browser AI experience',
  openGraph: {
    description: 'This is a private AI that uses WebGPU to run LLMs natively & privately in your browser, bringing you in-browser AI experience',
    images: ['https://res.cloudinary.com/diekemzs9/image/upload/v1732315249/omni_wb4uz9.png'],
    url: 'https://starter.rasmic.xyz/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OmniBot AI',
    description: 'This is a private AI that uses WebGPU to run LLMs natively & privately in your browser, bringing you in-browser AI experience',
    siteId: "",
    creator: "@iBz-04",
    creatorId: "",
    images: ['https://res.cloudinary.com/diekemzs9/image/upload/v1732315249/omni_wb4uz9.png'],
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
          <link
            rel="preload"
            href="https://res.cloudinary.com/diekemzs9/image/upload/v1732315249/omni_wb4uz9.png"
            as="image"
          />
          <link
            rel="preload"
            href="https://res.cloudinary.com/diekemzs9/image/upload/v1732315249/omni_wb4uz9.png"
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