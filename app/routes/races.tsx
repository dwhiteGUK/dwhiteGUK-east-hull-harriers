import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid'

import { Button } from '~/components/Button'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SubPageHero } from '~/components/SubPageHero'

import eventImage from '~/assets/images/quino-al-rN78O6UgdkE-unsplash.jpg'

const events = [
  {
    id: 1,
    title: 'Boxing Day 10k',
    time: '10:00am',
    date: 'Monday 26th December',
  },
  {
    id: 2,
    title: 'East Hull',
    time: '9:00am',
    date: 'Sunday 23rd March',
  },
  {
    id: 3,
    title: 'Major Stone  Half Marathon',
    time: '10:00am',
    date: 'Sunday 21st September',
  },
]

export default function About() {
  return (
    <div>
      <Header />
      <SubPageHero heading="Our Races" />
      <main>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
          <div className="shadow-sm border border-red-700">
            <div>
              <img
                className="h-48 w-full object-cover object-top"
                src={eventImage}
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse gap-4 items-start justify-between py-5 px-3 text-white">
              <div className="flex flex-col justify-center items-center p-2 bg-red-600 rounded-md">
                <ClockIcon className="h-6 w-6" />
                <span>10:00</span>
              </div>
              <div>
                <header>
                  <h2 className="block text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Boxing Day 10k
                  </h2>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">Monday 26th December</span>
                  </p>
                </header>
              </div>
            </div>
          </div>
          <div className="shadow-sm border border-red-700">
            <div>
              <img
                className="h-48 w-full object-cover object-top"
                src={eventImage}
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse gap-4 items-start justify-between py-5 px-3 text-white">
              <div className="flex flex-col justify-center items-center p-2 bg-red-600 rounded-md">
                <ClockIcon className="h-6 w-6" />
                <span>10:00</span>
              </div>
              <div>
                <header>
                  <h2 className="block text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Boxing Day 10k
                  </h2>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">Monday 26th December</span>
                  </p>
                </header>
              </div>
            </div>
          </div>
          <div className="shadow-sm border border-red-700">
            <div>
              <img
                className="h-48 w-full object-cover object-top"
                src={eventImage}
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse gap-4 items-start justify-between py-5 px-3 text-white">
              <div className="flex flex-col justify-center items-center p-2 bg-red-600 rounded-md">
                <ClockIcon className="h-6 w-6" />
                <span>10:00</span>
              </div>
              <div>
                <header>
                  <h2 className="block text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Boxing Day 10k
                  </h2>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">Monday 26th December</span>
                  </p>
                </header>
              </div>
            </div>
          </div>
          <div className="shadow-sm border border-red-700">
            <div>
              <img
                className="h-48 w-full object-cover object-top"
                src={eventImage}
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse gap-4 items-start justify-between py-5 px-3 text-white">
              <div className="flex flex-col justify-center items-center p-2 bg-red-600 rounded-md">
                <ClockIcon className="h-6 w-6" />
                <span>10:00</span>
              </div>
              <div>
                <header>
                  <h2 className="block text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Boxing Day 10k
                  </h2>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">Monday 26th December</span>
                  </p>
                </header>
              </div>
            </div>
          </div>
          <div className="shadow-sm border border-red-700">
            <div>
              <img
                className="h-48 w-full object-cover object-top"
                src={eventImage}
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse gap-4 items-start justify-between py-5 px-3 text-white">
              <div className="flex flex-col justify-center items-center p-2 bg-red-600 rounded-md">
                <ClockIcon className="h-6 w-6" />
                <span>10:00</span>
              </div>
              <div>
                <header>
                  <h2 className="block text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Boxing Day 10k
                  </h2>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">Monday 26th December</span>
                  </p>
                </header>
              </div>
            </div>
          </div>
          <div className="shadow-sm border border-red-700">
            <div>
              <img
                className="h-48 w-full object-cover object-top"
                src={eventImage}
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse gap-4 items-start justify-between py-5 px-3 text-white">
              <div className="flex flex-col justify-center items-center p-2 bg-red-600 rounded-md">
                <ClockIcon className="h-6 w-6" />
                <span>10:00</span>
              </div>
              <div>
                <header>
                  <h2 className="block text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Boxing Day 10k
                  </h2>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">Monday 26th December</span>
                  </p>
                </header>
              </div>
            </div>
          </div>
          <div className="shadow-sm border border-red-700">
            <div>
              <img
                className="h-48 w-full object-cover object-top"
                src={eventImage}
                alt=""
              />
            </div>
            <div className="flex flex-row-reverse gap-4 items-start justify-between py-5 px-3 text-white">
              <div className="flex flex-col justify-center items-center p-2 bg-red-600 rounded-md">
                <ClockIcon className="h-6 w-6" />
                <span>10:00</span>
              </div>
              <div>
                <header>
                  <h2 className="block text-xl font-bold leading-8 tracking-tight text-gray-900">
                    Boxing Day 10k
                  </h2>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">Monday 26th December</span>
                  </p>
                </header>
              </div>
            </div>
          </div>
        </div> */}

        <div className="m-20 grid grid-cols-1 gap-y-4 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {events.map(({ id, title, time, date }) => (
            <div
              key={id}
              className="relative flex items-start md:items-center justify-between space-x-3 rounded-lg border border-gray-300 bg-white p-4 md:px-6 md:py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-red-700 transform-gpu hover:scale-105 hover:cursor-pointer transition-all"
            >
              <div className="flex flex-wrap gap-4 md:gap-8 basis-full">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={eventImage}
                    alt=""
                  />
                </div>

                <div className="flex-1 flex flex-col md:items-center space-y-2 md:flex-row">
                  <h2 className="md:basis-56 lg:basis-64">{title}</h2>
                  <p className="flex md:basis-32 lg:basis-48 text-gray-500">
                    <ClockIcon className="h-6 w-6" />
                    <span className="pl-2">{time}</span>
                  </p>
                  <p className="flex text-gray-500">
                    <CalendarDaysIcon className="h-6 w-6" />
                    <span className="pl-2">{date}</span>
                  </p>
                </div>
                <Button
                  href="#"
                  color="red"
                  className="self-start md:self-end w-full md:w-auto text-center"
                >
                  Full Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
