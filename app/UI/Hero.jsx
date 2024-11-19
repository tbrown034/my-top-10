import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center flex-grow gap-6 p-6 text-center min-h-[calc(100vh-128px)]">
      <h1 className="text-6xl font-extrabold text-teal-100">My Top 10</h1>
      <h2 className="text-xl font-medium text-gray-300">
        Choose your favorites and build your ultimate top 10 list for the year.
      </h2>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/movies"
          className="px-8 py-4 text-lg font-semibold text-teal-900 transition-colors bg-teal-100 rounded-lg hover:bg-teal-200 active:bg-teal-300"
        >
          Movies
        </Link>
        <Link
          href="/tv"
          className="px-8 py-4 text-lg font-semibold text-teal-900 transition-colors bg-teal-100 rounded-lg hover:bg-teal-200 active:bg-teal-300"
        >
          TV Shows
        </Link>
      </div>
    </section>
  );
};

export default Hero;
