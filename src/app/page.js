"use client";

import { useState } from "react";
import data from "../utils/student.json";

export default function Header() {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((student) =>
    student.firstname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="w-full h-20 bg-white text-gray-900 px-6 py-4 flex justify-between items-center mb-6 border-b border-gray-200 shadow-sm">
        <a href="/" className="text-xl font-bold text-blue-600 border-b-2 border-blue-600">
          School System
        </a>
        <nav className="flex gap-6">
          <a href="/student" className="text-gray-500 hover:text-gray-900 transition">
            Students
          </a>
          <a href="/teacher" className="text-gray-500 hover:text-gray-900 transition">
            Teachers
          </a>
          <a href="/yes" className="text-gray-500 hover:text-gray-900 transition">
            Students v2
          </a>
        </nav>
      </header>
      <div className="flex gap-6 px-12 text-blac justify-center items-center text-black flex-row">
        <div className="h-125 w-100 flex flex-col items-center gap-6">
          <div className=" bg-white w-100 p-2 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md flex flex-row">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDBHX61LFhknME5hWXWNdDWYVI3cwH5m-iw&s" className="rounded-full h-35 w-35"/>
            <div className="w-full h-full flex justify-center flex-col ml-4">
              <h1 className="font-bold text-2xl">
                Nyamragchaa
              </h1>
              <h2>
                Birthday: 2009/09/20
              </h2>
              <h2>
                Gender: Male
              </h2>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <div className="flex flex-col gap-4 w-72">
              <div className="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm hover:shadow-md flex items-center gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/500px-ChatGPT-Logo.svg.png" className="rounded-full h-16 w-16 object-cover" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">ChatGPT</h1>
                  <h2 className="text-sm text-gray-500">Used for coloring and problem fixing</h2>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm hover:shadow-md flex items-center gap-3">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" className="rounded-full h-16 w-16 object-cover" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">Next.js</h1>
                  <h2 className="text-sm text-gray-500">Used for framework</h2>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm hover:shadow-md flex items-center gap-3">
                    <img src="https://img.icons8.com/ios_filled/1200/vercel.jpg" className="rounded-full h-16 w-16 object-cover" />
                    <div className="flex flex-col">
                      <h1 className="font-bold text-lg">Vercel</h1>
                      <h2 className="text-sm text-gray-500">Used for launching the website</h2>
                    </div>
              </div>
            </div>
          </div>
        </div>
      <div className="h-125 w-100 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
        <h1 className="font-bold text-2xl">About this Project:</h1>
        <p className="text-sm leading-6">
          Hello, my name is Nyamragchaa. I compiled a list of my classmates’ and
          teachers’ names along with items that represent them or that they
          commonly have on their person.
        </p>
        <p className="text-sm leading-6">
          I used Next.js with Tailwind CSS and deployed the project on Vercel.
          The information is stored using JSON files. Each profile picture and
          item was personally chosen based on interests, memories, and
          personality.
        </p>
      </div>
      </div>
    </div>
  );
}