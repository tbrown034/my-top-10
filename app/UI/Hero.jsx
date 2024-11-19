import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] gap-8 p-8 text-center">
      {/* Hero Title */}
      <h1 className="text-6xl font-black text-teal-100">Your Top 10</h1>

      {/* Hero Subheading */}
      <h2 className="text-2xl font-medium leading-snug text-teal-200 ">
        Discover, curate, and share your ultimate top 10 lists for movies, TV
        shows, and more. Start building memories today.
      </h2>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/movies"
          className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-teal-900 transition-transform bg-teal-100 rounded-lg hover:bg-teal-200 hover:scale-105"
        >
          Movies
        </Link>
        <Link
          href="/tv"
          className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-teal-900 transition-transform bg-teal-100 rounded-lg hover:bg-teal-200 hover:scale-105"
        >
          TV
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="/login"
          className="text-lg font-medium text-teal-100 transition hover:underline hover:text-teal-300"
        >
          Log In
        </a>
        <span className="text-gray-500">|</span>
        <a
          href="/signup"
          className="text-lg font-medium text-teal-100 transition hover:underline hover:text-teal-300"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
};

export default Hero;
