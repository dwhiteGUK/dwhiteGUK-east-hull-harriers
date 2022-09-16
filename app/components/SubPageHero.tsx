import emma from '~/assets/images/emma-simpson-mNGaaLeWEp0-unsplash.jpg'

export function SubPageHero({ heading }) {
  return (
    <div className="relative h-56 md:h-72">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={emma}
          alt="Women running down a country lane"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center mx-auto max-w-7xl h-full">
        <h1 className="mb-5 text-3xl md:text-7xl font-extrabold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <hr className="h-1 w-24 md:w-48 mb-5 border-t-4 border-red-500  z-50" />
      </div>
    </div>
  )
}
