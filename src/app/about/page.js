"use client";

import { useState } from "react";
import data from "../../utils/student.json";

export default function Header() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((student) =>
    student.firstname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a
            href="/"
            className="text-xl font-extrabold tracking-tight text-blue-600 transition hover:text-blue-700 sm:text-2xl"
          >
            School System
          </a>

          <a
            href="/about"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-black sm:px-5"
          >
            Nyamragchaa
          </a>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 text-black lg:flex-row lg:items-start lg:justify-center lg:px-8">
        
        {/* Left Side */}
        <div className="flex w-full max-w-[420px] flex-col gap-6">
          
          {/* Profile Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-xl">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDBHX61LFhknME5hWXWNdDWYVI3cwH5m-iw&s"
                className="h-28 w-28 rounded-2xl object-cover sm:h-32 sm:w-32"
              />

              <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Nyamragchaa
                </h1>

                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <h2>Birthday: 2009/09/20</h2>
                  <h2>Gender: Male</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-xl">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/500px-ChatGPT-Logo.svg.png"
                className="h-14 w-14 rounded-2xl object-cover sm:h-16 sm:w-16"
              />

              <div>
                <h1 className="text-base font-bold sm:text-lg">ChatGPT</h1>
                <h2 className="text-sm text-gray-500">
                  Used for coloring and problem fixing
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-xl">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
                className="h-14 w-14 rounded-2xl object-cover sm:h-16 sm:w-16"
              />

              <div>
                <h1 className="text-base font-bold sm:text-lg">Next.js</h1>
                <h2 className="text-sm text-gray-500">
                  Used for framework
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-xl">
              <img
                src="https://img.icons8.com/ios_filled/1200/vercel.jpg"
                className="h-14 w-14 rounded-2xl object-cover sm:h-16 sm:w-16"
              />

              <div>
                <h1 className="text-base font-bold sm:text-lg">Vercel</h1>
                <h2 className="text-sm text-gray-500">
                  Used for launching the website
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="h-[520px] w-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-xl sm:p-8 lg:max-w-[500px]">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            About this Project
          </h1>

          <div className="mt-6 space-y-5 text-sm leading-7 text-gray-600 sm:text-[15px]">
            <p>
              Hello, my name is Nyamragchaa. I compiled a list of my classmates’
              and teachers’ names along with items that represent them or that
              they commonly have on their person.
            </p>

            <p>
              I used Next.js with Tailwind CSS and deployed the project on
              Vercel. The information is stored using JSON files. Each profile
              picture and item was personally chosen based on interests,
              memories, and personality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}