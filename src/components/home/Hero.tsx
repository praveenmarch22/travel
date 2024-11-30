import React from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Travel Healthy, Stay Within Budget
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover destinations that cater to your health needs without breaking the bank. 
                Plan your perfect trip with personalized recommendations based on your wellness requirements.
              </p>
              <div className="mt-10">
                <div className="flex max-w-md gap-x-4">
                  <label htmlFor="destination-search" className="sr-only">
                    Search destinations
                  </label>
                  <input
                    id="destination-search"
                    type="text"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Where do you want to go?"
                  />
                  <Button type="submit">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-blue-50"></div>
    </div>
  )
}