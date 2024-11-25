import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Component as ToolTip } from "@/components/homepage/tooltip";


export const metadata: Metadata = {
  metadataBase: new URL("https://starter.rasmic.xyz"),
  keywords: [''],
  title: 'Feature page',
  openGraph: {
    description: 'features of Omnibot.',
    images: ['']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feature page',
    description: 'features of Omnibot.',
    siteId: "",
    creator: "@iBz-04",
    creatorId: "",
    images: [''],
  },
}


export default async function MarketingPage() {

  return (
    <PageWrapper>
      <div className='flex flex-col min-h-screen items-center mt-[2.5rem] p-3 w-full'>
        <h1 className="scroll-m-20 max-w-[600px] text-5xl font-bold tracking-tight text-center">
          Main Features
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
        Explore Omnibot features built for privacy, efficiency, and powerful AI interaction.
        </p>

        <section className="mb-10 items-center">
            <ToolTip />
            </section>
      
        <div className='flex flex-col min-h-screen max-w-[900px] items-center mb-[2rem] mt-[4rem]'>

          <article className="w-full mx-auto pb-8">

            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Privacy and Offline Capability</h2>
              <ul className="flex flex-col gap-1 list-disc ml-8 mb-4">
              <li className="text-md mb-2 leading-relaxed">Offline: Once the initial download is complete, models can be used without an active internet connection.</li>
              <li className="text-md mb-2 leading-relaxed">In-browser privacy: All AI models run locally on your hardware with no server-side processing.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0"> Interaction and Usability</h2>
        
              <ul className="flex flex-col gap-1 list-disc ml-8 mb-4">
                <li className="mb-2">Chat history: Access and manage your conversation history..</li>
                <li className="mb-2">Voice message support: Use voice interactions to engage with the models.</li>
                <li className="mb-2">Regenerate responses: Easily generate new responses without rewriting your prompt.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Model and File Support</h2>
              <ul className=" flex flex-col gap-1 list-disc ml-8 mb-4">
                <li className="mb-2">Supports new open-source models: Interact with models like Gemma, Llama2 & 3, and Mistral.</li>
                <li className="mb-2">Chat with files: Load PDFs and non-binary files (including code) for local processing and Q&A.</li>
              </ul>
            </section>


            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0"> User Experience and Customization</h2>
              <ul className=" flex flex-col gap-1 list-disc ml-8 mb-4">
              <li className="text-md mb-2 leading-relaxed">Responsive design: Optimized for devices supporting WebGL, including mobile and desktop.</li>
              <li className="text-md mb-2 leading-relaxed">Markdown & code highlight: View markdown and code with proper formatting and highlighting.</li>
            <li className="text-md mb-2 leading-relaxed">Custom memory support: Add personalized instructions for tailored AI responses.</li>
            <li className="text-md mb-2 leading-relaxed">Export chat messages: Save conversations in JSON or Markdown format.</li>
            <li className="text-md mb-2 leading-relaxed">Mode Toggle: Choose between light, dark or system themes.</li>
            </ul>


            </section>
          </article>
        </div>

      </div>
    </PageWrapper>
  )
}