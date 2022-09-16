import { Button } from '~/components/Button'

import fabio from '~/assets/images/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg'
import josh from '~/assets/images/josh-gordon-fzHmP6z8OQ4-unsplash.jpg'
import zac from '~/assets/images/zac-ong-RYvOI54rmPw-unsplash.jpg'

export function Hero() {
  return (
    <div className="h-[80vh] md:h-[600px] flex flex-row overflow-x-scroll snap-x snap-mandatory bg-slate-200">
      <div className="snap-center group relative grid grid-cols-1 grid-rows-1 basis-full shrink-0 md:basis-1/3">
        <div className="col-start-1 row-start-1 col-span-1 row-span-1 z-10">
          <img
            src={fabio}
            alt="Man running over bridge"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center  col-start-1 row-start-1 col-span-1 row-span-1 after:content-[' '] after:bg-red-500 after:block after:absolute after:inset-0 after:opacity-0 hover:after:opacity-75 after:transition-opacity after:z-40 hover:cursor-pointer">
          <h2 className="mb-5 uppercase text-5xl font-extrabold text-white z-50">
            Races
          </h2>
          <hr className="h-1 w-24 mb-5 border-t-4 border-red-500  z-50" />
          <Button
            href="#"
            color="white"
            className="z-50 transition-all group-hover:outline-offset-4 group-hover:outline-width-2"
          >
            Find Out More
          </Button>
        </div>
      </div>
      <div className="snap-center group relative grid grid-cols-1 grid-rows-1 basis-full shrink-0 md:basis-1/3">
        <div className="col-start-1 row-start-1 col-span-1 row-span-1 z-10">
          <img
            src={josh}
            alt="Runner with mountains in teh distance"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center  col-start-1 row-start-1 col-span-1 row-span-1 after:content-[' '] after:bg-red-500 after:block after:absolute after:inset-0 after:opacity-0 hover:after:opacity-75 after:transition-opacity after:z-40 hover:cursor-pointer">
          <h2 className="mb-5 uppercase text-5xl font-extrabold text-white z-50 ">
            Youths
          </h2>
          <hr className="h-1 w-24 mb-5 border-t-4 border-red-500  z-50" />
          <Button
            href="#"
            color="white"
            className="z-50 transition-all group-hover:outline-offset-4 group-hover:outline-width-2"
          >
            Find Out More
          </Button>
        </div>
      </div>
      <div className="snap-center group relative grid grid-cols-1 grid-rows-1 basis-full shrink-0 md:basis-1/3">
        <div className="col-start-1 row-start-1 col-span-1 row-span-1 z-10">
          <img
            src={zac}
            alt="Silhouette of woman running"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center  col-start-1 row-start-1 col-span-1 row-span-1 after:content-[' '] after:bg-red-500 after:block after:absolute after:inset-0 after:opacity-0 hover:after:opacity-75 after:transition-opacity after:z-40 hover:cursor-pointer">
          <h2 className="mb-5 uppercase text-5xl font-extrabold text-white z-50">
            Training
          </h2>
          <hr className="h-1 w-24 mb-5 border-t-4 border-red-500  z-50" />
          <Button
            href="#"
            color="white"
            className="z-50 transition-all group-hover:outline-offset-4 group-hover:outline-width-2"
          >
            Find Out More
          </Button>
        </div>
      </div>
    </div>
  )
}
