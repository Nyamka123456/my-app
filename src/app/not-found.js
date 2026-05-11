export default function Main() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

      <p className="mt-4 text-xl text-gray-600">
        Page not found
      </p>

      <a
        href="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
}