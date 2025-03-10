import { Link } from "react-router-dom";
import backgroundImage from "../../public/pexels-benjaminfarren-13582220.jpg";

const Error = () => {
  return (
    <main
      className="grid min-h-screen place-items-center bg-cover bg-center bg-no-repeat px-6 py-24 sm:py-32 lg:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="alert"
      aria-label="Error 404 - Page not found"
    >
      <div className="text-center  p-8 rounded-lg ">
        <p className="text-base font-semibold text-[#efff16]">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[#ffff] sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-[#efff16] sm:text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-[]-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:ring-2 focus-visible:ring-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
