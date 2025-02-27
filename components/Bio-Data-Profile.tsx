"use client"

import Image from "next/image"

export default function BiodataProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border-8 border-amber-800 bg-white p-8 relative">
        {/* Background Mandala Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full bg-[url('/placeholder.svg?height=800&width=800')] bg-no-repeat bg-right-top bg-contain"></div>
        </div>

        {/* Sanskrit Text */}
        <div className="text-center mb-6 relative z-10">
          <h1 className="text-2xl font-semibold text-amber-800">ॐ श्री गणेशाय नमः</h1>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 relative z-10">
          {/* Photo */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-52 h-80 bg-gray-200 overflow-hidden">
              <Image
                src="/Profile.jpg"
                alt="Profile Photo"
                width={240}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Basic Info */}
          <div className="w-full mt-36 md:w-2/3">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Kaushal Rathod</h2>
            <p className="text-xl mb-2">Date of Birth : 04 November 2001</p>
            <p className="text-xl">Place of Birth : Ahmedabad</p>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="mb-8 relative z-10">
          <div className="bg-amber-800 text-white text-center py-3 rounded-full mb-6">
            <h3 className="text-xl font-semibold">PERSONAL DETAILS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Date of Birth</div>
              <div className="w-1/2">04 November 2001</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Time of Birth</div>
              <div className="w-1/2">12:50 AM</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Place of Birth</div>
              <div className="w-1/2">Ahmedabad</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Rashi</div>
              <div className="w-1/2">Mithun (Gemini)</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Height</div>
              <div className="w-1/2">5 feet 5 inches</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Hobby</div>
              <div className="w-1/2">Travelling, Reading Books</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Bachelors</div>
              <div className="w-1/2">Governmnet Enginnering college Modasa, 2024 (Mechanical)</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Work</div>
              <div className="w-1/2">Software engineer, trukky Logistics</div>
            </div>
          </div>
        </div>

        {/* Family Details Section */}
        <div className="relative z-10">
          <div className="bg-amber-800 text-white text-center py-3 rounded-full mb-6">
            <h3 className="text-xl font-semibold">FAMILY DETAILS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Father's Name</div>
              <div className="w-1/2">Mukeshbhai Dahyabhai Rathod</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Father's Occupation</div>
              <div className="w-1/2">Business (textile)</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Mother's Name</div>
              <div className="w-1/2">HeenaBen Mukeshbhai Rathod</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Mother's Occupation</div>
              <div className="w-1/2">House Wife</div>
            </div>
            <div className="flex">
              <div className="w-1/2 text-gray-800 font-medium">Siblings</div>
              <div className="w-1/2">1 Sister (married)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

