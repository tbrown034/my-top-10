import React from "react";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">My Top 10</h2>
        </div>
        <div className="flex mb-4 space-x-4 md:mb-0">
          <Link href="/about" className="hover:text-teal-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-teal-300">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-teal-300">
            Privacy Policy
          </Link>
        </div>

        <div className="flex space-x-4">
          <a
            href="mailto:info@mytop10.com"
            aria-label="Email"
            className="hover:text-teal-300"
          >
            <EnvelopeIcon className="w-6 h-6" />
          </a>
          <a
            href="tel:+1234567890"
            aria-label="Phone"
            className="hover:text-teal-300"
          >
            <PhoneIcon className="w-6 h-6" />
          </a>
          <a
            href="https://goo.gl/maps/example"
            aria-label="Address"
            className="hover:text-teal-300"
          >
            <MapPinIcon className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-sm text-center text-teal-400">
        © {new Date().getFullYear()} My Top 10. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
