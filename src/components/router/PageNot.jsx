

export default function PageNot() {
  return (
    <div>
      <h1 className="text-6xl my-5 p-5 font-semibold text-center">404 Page Not Found</h1>
      <p className="text-center text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5">
        The page you are looking for does not exist.
      </p>
      <p className="text-center text-slate-300 text-lg font-semibold md:text-3xl px-5 mt-5">
        Please check the URL or return to the homepage.
      </p>
      <div className="flex justify-center mt-10">
        <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Homepage
        </a>
        </div>
    </div>
  )
}
