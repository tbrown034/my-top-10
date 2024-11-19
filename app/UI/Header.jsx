import React from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 ">
      <Link href="/" className="text-2xl font-bold text-white">
        My Top 10
      </Link>

      {/* Hamburger Icon */}
      <button className="text-white hover:text-teal-300">
        <Bars3Icon className="w-8 h-8" />
      </button>
    </header>
  );
}
