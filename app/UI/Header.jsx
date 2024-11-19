import Link from "next/link";
import { GlobeAltIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Left Section: Icon and Title */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center justify-center p-2 bg-teal-600 rounded-xl"
        >
          <GlobeAltIcon className="w-6 h-6 text-white" />
        </Link>
        <Link href="/" className="text-xl font-bold text-white">
          TopTen
        </Link>
      </div>

      {/* Middle Section: Nav Links (hidden on mobile) */}
      <nav className="hidden gap-6 md:flex">
        <Link href="/" className="text-teal-100 hover:text-teal-300">
          Home
        </Link>
        <Link href="/movies" className="text-teal-100 hover:text-teal-300">
          Movies
        </Link>
        <Link href="/tv" className="text-teal-100 hover:text-teal-300">
          TV
        </Link>
        <Link href="/music" className="text-teal-100 hover:text-teal-300">
          Music
        </Link>
        <Link href="/about" className="text-teal-100 hover:text-teal-300">
          About
        </Link>
      </nav>

      {/* Right Section: Buttons (hidden on mobile) */}
      <div className="items-center hidden gap-4 md:flex">
        <button className="px-4 py-2 text-teal-900 bg-teal-100 rounded-lg hover:bg-teal-200">
          Log In / Sign Up
        </button>
        <button className="px-4 py-2 text-teal-100 bg-teal-600 rounded-lg hover:bg-teal-500">
          Dark Mode
        </button>
      </div>

      {/* Mobile: Hamburger Icon */}
      <button className="flex items-center text-white md:hidden hover:text-teal-300">
        <Bars3Icon className="w-8 h-8" />
      </button>
    </header>
  );
}
