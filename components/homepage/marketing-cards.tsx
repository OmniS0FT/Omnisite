"use client"
import { TITLE_TAILWIND_CLASS } from '@/utils/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsData = [
  {
    id: 1,
    name: 'Hugging Face',
    description: 'Computation tools for building apps using machine learning',
    image: 'https://res.cloudinary.com/diekemzs9/image/upload/v1732381613/hugf_npywbf.png',
    imageDark: "https://res.cloudinary.com/diekemzs9/image/upload/v1732381613/hugf_npywbf.png",
    url: "https://huggingface.co/"
  },
  {
    id: 2,
    name: 'Langchain',
    description: 'Framework that helps facilitate integration of LLMs into apps',
    image: 'https://res.cloudinary.com/diekemzs9/image/upload/v1732381904/Langchain--Streamline-Simple-Icons_1_symvt6.png',
    url: "https://www.langchain.com/"
  },
  {
    id: 3,
    name: 'WebLLM',
    description: 'High-Performance In-Browser LLM Inference Engine',
    image: 'https://res.cloudinary.com/diekemzs9/image/upload/v1732390805/webllm_fsb3mb.jpg',
    imageDark: "https://res.cloudinary.com/diekemzs9/image/upload/v1732390973/Screenshot_2024-11-23_224233_ablrhb.png",
    url: "https://webllm.mlc.ai/"
  },
  {
    id: 4,
    name: 'TypeScript',
    description: 'A superset of JavaScript that enhances code maintainability.',
    image: 'https://utfs.io/f/5b51351d-218b-4931-a296-0a9275030aaf-8myeez.png',
    url: "https://www.typescriptlang.org/"
  },
  {
    id: 5,
    name: 'Next.js',
    description: 'Built on a foundation of fast, production-grade tooling',
    image: 'https://res.cloudinary.com/diekemzs9/image/upload/v1732392905/Symbol_Alternative_ajlaep.png',
    url: "https://supabase.com/"
  },
  {
    id: 6,
    name: 'Meta',
    description: 'Open-source & multilingual Artificial Intelligence models ',
    image: 'https://res.cloudinary.com/diekemzs9/image/upload/v1732391863/meta_kqdrkd.png',
    url: "https://www.llama.com/"
  },
  {
    id: 7,
    name: 'Microsoft',
    description: 'A family of powerful, small language models (SLMs)',
    image: 'https://res.cloudinary.com/diekemzs9/image/upload/v1732382354/microsoft_v76lia.png',
    url: "https://azure.microsoft.com/en-us/products/phi"
  },
]

const SpringAnimatedFeatures = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[75%]">
      <div className='flex flex-col mb-[3rem]'>
        <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>
        Omnibot: Built on the best
        </h2>
        <p className="mx-auto max-w-[500px] text-gray-600 dark:text-gray-400 text-center mt-2 ">
        Technologies, large language models and frameworks
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left border p-6 rounded-md dark:bg-black"
            >
              <Link href={project?.url} target="_blank" rel="noopener noreferrer" >
                <Image
                  src={project?.imageDark ? project?.imageDark : project.image}
                  width={40}
                  height={30}
                  className="mb-3 rounded"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium ">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-600 dark:text-gray-400">
                  {project.description}
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SpringAnimatedFeatures
