import Link from "next/link";
import { FilmIcon, TvIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";
import { auth } from "@/auth"; // Ensure this path is correct
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";

const Hero = async () => {
  const session = await auth();

  return (
    <section className="flex flex-col items-center justify-center gap-8 p-8 text-center">
      {/* Hero Title */}
      <h1 className="text-5xl font-black text-teal-100 md:text-6xl">
        Your Top 10
      </h1>
      <h2 className="mt-4 text-xl font-medium leading-snug text-teal-200 md:text-2xl">
        Discover, curate, and share your ultimate top 10 lists for movies,
        music, TV shows, and more. Start building memories today.
      </h2>

      {/* Category Links */}
      <div className="flex flex-col gap-4 mt-6 sm:flex-row">
        <Link
          href="/movies"
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-teal-900 transition-transform bg-teal-100 rounded-lg shadow hover:bg-teal-200 hover:scale-105"
        >
          <FilmIcon className="w-6 h-6" />
          Movies
        </Link>
        <Link
          href="/music"
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-teal-900 transition-transform bg-teal-100 rounded-lg shadow hover:bg-teal-200 hover:scale-105"
        >
          <MusicalNoteIcon className="w-6 h-6" />
          Music
        </Link>
        <Link
          href="/tv"
          className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-teal-900 transition-transform bg-teal-100 rounded-lg shadow hover:bg-teal-200 hover:scale-105"
        >
          <TvIcon className="w-6 h-6" />
          TV
        </Link>
      </div>

      {/* Auth Section */}
      <div className="mt-6">
        {session?.user ? (
          <>
            <p className="mb-2 text-lg font-medium text-teal-100">
              Welcome, {session.user.name}!
            </p>
            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </section>
  );
};

export default Hero;
