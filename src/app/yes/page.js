"use client";

import { useState } from "react";
import data from "../../utils/student.json";
import data2 from "../../utils/teacher.json";

export default function Header() {
  const [search, setSearch] = useState("");

  const filteredStudents = data.filter((student) =>
    student.firstname.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTeachers = data2.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 gap-4">
          
          <a
            href="/"
            className="text-xl font-extrabold tracking-tight text-blue-600 transition hover:text-blue-700 sm:text-2xl"
          >
            School System
          </a>

          <div className="flex-1 flex justify-center">
            <input
              type="text"
              className="w-full max-w-xs sm:max-w-sm border border-gray-300 bg-white rounded-xl px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search students or teachers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <a
            href="/about"
            className="rounded-xl bg-gray-900 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-black"
          >
            Nyamragchaa
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {filteredStudents.length === 0 &&
          filteredTeachers.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 mt-10">
              No data found
            </div>
          ) : (
            <>
              {/* STUDENTS */}
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={student.image}
                      className="h-14 w-14 rounded-full object-cover border"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        {student.firstname}
                      </h2>
                      <p className="text-xs text-gray-500">
                        {student.firstname}@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600 space-y-1">
                    <p>Height: {student.height} cm</p>
                    <div className="flex items-center gap-2">
                      <span>Country:</span>
                      <img
                        src={student.country}
                        className="h-4 w-5 rounded-sm border object-cover"
                      />
                    </div>
                  </div>

                  {/* ITEMS */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Items
                    </p>

                    <div className="space-y-2">
                      {student.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-2"
                        >
                          <img
                            src={item.image}
                            className="h-10 w-10 rounded-md object-contain bg-white"
                          />
                          <span className="text-sm text-gray-700">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* TEACHERS (UPDATED SAME ITEMS STYLE) */}
              {filteredTeachers.map((teacher) => (
                <div
                  key={`t-${teacher.id}`}
                  className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={teacher.image}
                      className="h-14 w-14 rounded-full object-cover border"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        {teacher.lastname}. {teacher.name}
                      </h2>
                      <p className="text-xs text-gray-500">
                        {teacher.name}@nhs.edu.mn
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="mt-4 text-gray-600 text-sm">Subject: {teacher.subject}</span>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Country:</span>
                    <img
                      src={teacher.country}
                      className="h-4 w-5 rounded-sm border object-cover"
                    />
                  </div>
                  </div>
                 

                  {/* SAME ITEMS SECTION */}
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      Items
                    </p>

                    <div className="space-y-2">
                      {teacher.items?.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-2"
                        >
                          <img
                            src={item.image}
                            className="h-10 w-10 rounded-md object-contain bg-white"
                          />
                          <span className="text-sm text-gray-700">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}