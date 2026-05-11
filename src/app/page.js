"use client";

export default function Header() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            href="/"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-blue-600 transition hover:text-blue-700"
          >
            School System
          </a>

          {/* User */}
          <a
            href="/about"
            className="rounded-xl bg-gray-900 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-black"
          >
            Nyamragchaa
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900">
          Nest IT School
          <span className="block p-1 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Management System
          </span>
        </h1>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          <a
            href="/about"
            className="group rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
              About
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Learn more about me and what I used.
            </p>
          </a>

          <a
            href="/yes"
            className="group rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
              Data
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              View all students/teachers items and information.
            </p>
          </a>

          <a
            href="/fdsafdasgdas"
            className="group rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-red-300 hover:shadow-xl"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 transition group-hover:text-red-500">
              Error
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Visit an Error page.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}