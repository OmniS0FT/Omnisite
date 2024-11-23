import { TITLE_TAILWIND_CLASS } from '@/utils/constants'
import Image from 'next/image'
import Link from "next/link"
export default function BlogSample() {

  const articles = [
    {
      id: 1,
      image: "https://res.cloudinary.com/diekemzs9/image/upload/c_fill,ar_16:9/v1732394436/boliviainteligente-uSooyF1X0s8-unsplash-min_1_caarjt.jpg",
      title: "To run models efficiently, you need a GPU with enough memory. 7B models require 6GB, 3B models require 3GB.",
      date: "2024-08-11 21:16:04.765648-05"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/diekemzs9/image/upload/c_fill,ar_16:9/v1732395609/andrea-de-santis-tFabmar4vb0-unsplash_1_vydt20.jpg",
      title: "If your mobile  phone supports WebGl, you'll be able to use Omnibot just as you would on a PC",
      date: "2024-04-16 08:29:32.188999-05"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/diekemzs9/image/upload/v1732397045/boliviainteligente-dCvqMHRUIhY-unsplash_1_ulqxes.jpg",
      title: "You can eamlessly generate and save your chat messages in either json or markdown format.",
      date: "2024-06-14 15:20:52.368844-05"
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex flex-col items-center p-3 w-full'>
        <div className='flex flex-col justify-start items-center gap-2 w-full'>
          <div className='flex gap-3 justify-start items-center w-full'>
            <h1 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>
              Info Session
            </h1>
          </div>
          <div className='flex gap-3 justify-start items-center w-full border-b pb-4'>
            <p className="text-gray-600 dark:text-gray-400">
              Some important information about the omnibot usage
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-5">
          {articles?.map((article) => (
            <Link href={"/"} key={article?.id}>
              <article
                className="flex flex-col space-y-2 p-4 rounded-md border dark:bg-black"
              >
                <Image
                  src={article?.image!}
                  alt={"blog image"}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                />
                <div className='flex lg:flex-row w-full justify-between items-center'>
                  <h2 className="text-md lg:text-lg font-bold">{article?.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {new Date(article?.date!)?.toLocaleDateString()}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}
