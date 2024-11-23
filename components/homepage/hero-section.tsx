import { ArrowRight, Github } from 'lucide-react';
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import Image from 'next/image';
import { TITLE_TAILWIND_CLASS } from '@/utils/constants';

export default function HeroSection() {
    return (
        <section className='flex flex-col items-center justify-center leading-6 mt-[3rem]' aria-label="Nextjs Starter Kit Hero">
            <h1 className={`${TITLE_TAILWIND_CLASS} scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white`}>
                OmniBot: Your Native AI Assistant
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 text-center mt-2 dark:text-gray-400">
            This is a private AI that uses WebGPU to run LLMs natively & privately in your browser, bringing you in-browser AI experience.
            </p>
            <div className="flex justify-center items-center gap-3">
                <Link href="/" className="mt-5">
                    <Button className="animate-buttonheartbeat rounded-md bg-green-600 hover:bg-green-500 text-sm font-semibold text-white">
                        Get Started
                    </Button>
                </Link>

                <Link
                    href="hhttps://github.com/orgs/OmniB0T/discussions"
                    target='_blank'
                    className="mt-5"
                    aria-label="Join Discord (opens in a new tab)"
                >
                    <Button variant="outline" className="flex gap-1">
                        Discussions
                        <ArrowRight className='w-4 h-4' aria-hidden="true" />
                    </Button>
                </Link>
                <Link
                    href="https://github.com/OmniB0T"
                    target='_blank'
                    className='animate-buttonheartbeat border p-2 rounded-full mt-5 hover:dark:bg-black hover:cursor-pointer'
                    aria-label="View NextJS 14 Starter Template on GitHub"
                >
                    <Github className='w-5 h-5' aria-hidden="true" />
                </Link>
            </div>
            <div>
                <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
                    <div className="relative rounded-xl">
                        <Image
                            src="https://res.cloudinary.com/diekemzs9/image/upload/v1732315249/omni_wb4uz9.png"
                            alt="Nextjs Starter Kit Dashboard Preview"
                            width={1100}
                            height={550}
                            priority={true}
                            className="block rounded-[inherit] border object-contain shadow-lg dark:hidden"
                        />
                        <Image
                            src="https://res.cloudinary.com/diekemzs9/image/upload/v1732315285/omni2_qciamy.png"
                            width={1100}
                            height={550}
                            alt="Nextjs Starter Kit Dark Mode Dashboard Preview"
                            priority={true}
                            className="dark:block rounded-[inherit] border object-contain shadow-lg hidden"
                        />
                        <BorderBeam size={250} duration={12} delay={9} />
                    </div>
                </div>
            </div>
        </section>
    )
}
