import React from 'react'
import { Plane } from 'lucide-react'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center justify-center space-x-2">
          <Plane className="h-10 w-10 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">HealthyTravel</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  )
}