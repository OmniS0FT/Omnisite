import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from "@/components/wrapper/page-wrapper";
import { VideoPlayer } from '@/components/video-player';
import { Component as RadarChart } from "@/components/homepage/metrics";

export const metadata: Metadata = {
  metadataBase: new URL("https://starter.rasmic.xyz"),
  keywords: [''],
  title: 'Marketing page',
  openGraph: {
    description: 'Description and marketing of Omnibot',
    images: ['']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing page',
    description: 'Description and marketing of Omnibot',
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
          Glad you made it here!
        </h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg text-center mt-2 dark:text-gray-400">
        Get to know about the Omnibot initative and what it has to offer.
        </p>
        <div className='flex gap-2 mt-2'>
          <Link href="https://www.omnibot.chat/" className="mt-2">
            <Button size="lg">Try it</Button>
          </Link>
          <Link href="https://github.com/orgs/OmniB0T/discussions" className="mt-2 pl-3">
            <Button size="lg" variant="outline">Join Community</Button>
          </Link>
        </div>
        <div className='mb-3 mt-[1.5rem] max-w-[900px] w-full'>
          <VideoPlayer videoSrc="https://res.cloudinary.com/diekemzs9/video/upload/v1732551180/1_video_-_Made_with_Clipchamp_tchkgc.mp4" />
        </div>
        <div className='flex flex-col min-h-screen max-w-[900px] items-center mb-[2rem]'>
          <article className="w-full mx-auto pb-8">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6">About Omnibot</h1>

            <section className="mb-8">
              <p className="text-md leading-relaxed">Omnibot is a cutting-edge AI platform designed to bring the power of advanced language models directly to your browser. By leveraging WebGPU technology, Omnibot ensures your interactions with AI remain private, secure, and fast ; all without relying on server-side processing.</p>
            </section>



            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Mission</h2>
              <p className="text-md mb-5 leading-relaxed">Our goal is to make AI accessible, reliable, and entirely local, empowering users to experience the capabilities of large language models while retaining full control of their data.</p>
              <h3 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Mission</h3>
              <ol className="flex flex-col gap-1 list-decimal ml-8 mb-4">
                <li className="mb-2"><strong>Privacy First:</strong> All processing happens on your device, ensuring your data never leaves your local environment.</li>
                <li className="mb-2"><strong>Free advanced features:</strong> From chat history to voice input and markdown support, Omnibot delivers a versatile experience tailored to your needs.</li>
                <li className="mb-2"><strong>Offline Usability:</strong>  After initial setup, Omnibot works quite well without an internet connection.</li>
              </ol>
            </section>

            <section className="mb-8">
            <RadarChart />
            </section>


            <section className="mb-8">
              <h2 className="mt-10 scroll-m-20 border-b pb-2 mb-3 text-3xl font-semibold tracking-tight transition-colors first:mt-0">Join Us</h2>
              <p className="text-md mb-5 leading-relaxed">
              Omnibot is built for innovators, creators, and everyday users seeking smarter tools. Whether you're exploring ideas, simply curious, Omnibot is your trusted companion.</p>
            </section>
          </article>
        </div>

      </div>
    </PageWrapper>
  )
}
