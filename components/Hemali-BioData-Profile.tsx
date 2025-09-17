"use client"

import Image from "next/image"

export default function HemaliBioDataProfile() {
  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-4 md:p-6">
      <div className="border-4 sm:border-8 border-amber-800 bg-white p-4 sm:p-6 md:p-8 relative">
        {/* Background Mandala Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full bg-no-repeat bg-right-top bg-contain"></div>
        </div>

        {/* Sanskrit Text */}
        <div className="text-center mb-4 md:mb-6 relative z-10">
          <h1 className="text-xl sm:text-2xl font-semibold text-amber-800">ॐ श्री गणेशाय नमः</h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-8 relative z-10">
          {/* Photo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-40 rounded-md sm:w-48 md:w-52 h-60 sm:h-72 md:h-80 bg-gray-200 overflow-hidden">
              <Image
                src="/Hemali.jpg"
                alt="Profile Photo"
                width={240}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Basic Info */}
          <div className="w-full md:w-2/3 mt-4 md:mt-36 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-gray-800">Hemali Panchal Dineshbhai</h2>
            <p className="text-lg sm:text-xl mb-1 md:mb-2">Date of Birth : 04 January 1999</p>
            <p className="text-lg sm:text-xl">Place of Birth : Ahmedabad, Gujarat</p>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="mb-6 md:mb-8 relative z-10">
          <div className="bg-amber-800 text-white text-center py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold">PERSONAL DETAILS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-bold">Date of Birth</div>
              <div className="w-full sm:w-1/2">04 January 1999</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Time of Birth</div>
              <div className="w-full sm:w-1/2">12:50 AM</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Place of Birth</div>
              <div className="w-full sm:w-1/2">Ahmedabad</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Rashi</div>
              <div className="w-full sm:w-1/2">Karka (Cancer)</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Height</div>
              <div className="w-full sm:w-1/2">5 feet 5 inches</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Weight</div>
              <div className="w-full sm:w-1/2">65 kg</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Blood Group</div>
              <div className="w-full sm:w-1/2">O+</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Hobby</div>
              <div className="w-full sm:w-1/2">Travelling, Reading Books</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Languages Known</div>
              <div className="w-full sm:w-1/2">English, Hindi, Gujarati</div>
            </div>
          </div>
        </div>

        {/* Education & Career Section */}
        <div className="mb-6 md:mb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Bachelors</div>
              <div className="w-full sm:w-1/2">Government Engineering College Modasa, 2024 (Mechanical engineering)</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Work</div>
              <div className="w-full sm:w-1/2">Software Engineer, Trukky Logistics</div>
            </div>
          </div>
        </div>

        {/* Family Details Section */}
        <div className="mb-6 md:mb-8 relative z-10">
          <div className="bg-amber-800 text-white text-center py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold">FAMILY DETAILS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Father&apos;s Name</div>
              <div className="w-full sm:w-1/2">Mukeshbhai Dahyabhai Rathod</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Father&apos;s Occupation</div>
              <div className="w-full sm:w-1/2">Business (Textile)</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Mother&apos;s Name</div>
              <div className="w-full sm:w-1/2">HeenaBen Mukeshbhai Rathod</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Mother&apos;s Occupation</div>
              <div className="w-full sm:w-1/2">House Wife</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Siblings</div>
              <div className="w-full sm:w-1/2">1 Sister (Married)</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Family Type</div>
              <div className="w-full sm:w-1/2">Nuclear Family</div>
            </div>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="relative z-10">
          <div className="bg-amber-800 text-white text-center py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold">CONTACT DETAILS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-4">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Mobile</div>
              <div className="w-full sm:w-1/2">+91 8401641101</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Email</div>
              <div className="w-full sm:w-1/2">rathodkaushal2001@gmail.com</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 text-gray-800 font-medium">Current Address</div>
              <div className="w-full sm:w-1/2">Ghatlodia, Ahmedabad, Gujarat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

