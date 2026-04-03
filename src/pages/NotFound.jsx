import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../Layout/Layout'
import SecondaryBtn from '../component/button/SecendaryBtn'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-950 via-lime-950/90 to-brown-950 flex items-center justify-center px-4">
      <Layout>
        <div className="flex flex-col items-center justify-center text-center">
          {/* Oops Text with Galaxy Effect */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-10xl font-black mb-4 relative">
              <span
                className="inline-block bg-linear-to-br from-blue-900 via-yellow-100 to-indigo-900 text-transparent bg-clip-text animate-pulse"
              >
                Oops!
              </span>
            </h1>
          </div>

          {/* 404 Error Code and Text */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-lime-100 mb-3">
              404 - PAGE NOT FOUND
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Description Text */}
          <p className="text-amber-100 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Go to Homepage Button */}
          <SecondaryBtn text="GO TO HOMEPAGE" onClick={() => navigate('/')} />

          {/* Decorative Elements */}
          <div className="mt-16 grid grid-cols-3 gap-8 opacity-10">
            <div className="w-20 h-20 bg-blue-500 rounded-lg transform -rotate-12"></div>
            <div className="w-24 h-24 bg-purple-500 rounded-full"></div>
            <div className="w-20 h-20 bg-indigo-500 rounded-lg transform rotate-12"></div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default NotFound
