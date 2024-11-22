"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/getMovies?page=${page}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.movies); // Set movies for the current page
      setTotalPages(data.totalPages); // Set the total number of pages
    } catch (error) {
      console.error(`[ERROR] ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  return (
    <section className="p-8">
      {/* Movies Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative p-6 transition-transform bg-teal-800 rounded-lg shadow-lg hover:bg-teal-700 hover:scale-105"
          >
            <div className="relative w-full mb-4 h-96">
              <Image
                src={movie.posterPath || "/placeholder.png"}
                alt={movie.title || "No title available"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="rounded-md"
                loading="lazy"
              />
            </div>
            <h4 className="text-xl font-semibold text-white">{movie.title}</h4>
            <p className="text-sm text-gray-300">
              Release Date: {movie.releaseDate}
            </p>
            <p className="text-sm text-gray-300">Rating: {movie.rating} / 10</p>
            <p className="text-sm text-gray-300">Votes: {movie.voteCount}</p>
            <Link
              href={`/movies/${movie.id}`}
              className="inline-block px-4 py-2 mt-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500"
            >
              More Info
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-500 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-500 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default TopMovies;
