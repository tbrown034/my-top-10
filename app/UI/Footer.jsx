import Link from "next/link";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="p-6 text-teal-100">
      {/* Line Section */}
      <div className="flex justify-center">
        <div className="w-2/3 border-t border-teal-700"></div>
      </div>

      <div className="container flex flex-col gap-8 mx-auto mt-6 md:flex-row md:justify-between">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold">My Top 10</h2>
          <p className="mt-1 text-sm text-teal-300">
            Discover, curate, and share your favorite top 10 lists.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {/* Main Navigation */}
          <div>
            <h3 className="text-lg font-semibold">Make Your List</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/movies" className="hover:text-teal-300">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/tv" className="hover:text-teal-300">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-teal-300">
                  Music
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/about-site"
                  className="flex items-center gap-2 hover:text-teal-300"
                >
                  About the Site
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about-developer"
                  className="flex items-center gap-2 hover:text-teal-300"
                >
                  About the Developer
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="mailto:trevorbrown.web@gmail.com"
                className="flex items-center gap-2 hover:text-teal-300"
              >
                <EnvelopeIcon className="w-5 h-5" />
                trevorbrown.web@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://trevorthewebdeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-teal-300"
              >
                <GlobeAltIcon className="w-5 h-5" />
                Visit trevorthewebdeveloper.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-sm text-center text-teal-400">
        © {new Date().getFullYear()} My Top 10. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
