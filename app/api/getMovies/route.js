import { NextResponse } from "next/server";

// Helper function to process movie data
function processMovieData(data) {
  if (!data || !Array.isArray(data.results)) {
    throw new Error("Invalid API response format");
  }

  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterPath: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null,
    releaseDate: movie.release_date || "Unknown",
    rating: movie.vote_average || "N/A",
    voteCount: movie.vote_count || 0, // Number of reviews
  }));
}

export async function GET(request) {
  const bearerToken = process.env.TMDB_ACCESS_TOKEN;
  const apiKey = process.env.TMDB_API_KEY;

  // Set defaults for year, region, page, and vote count
  const year = "2024";
  const region = "US";
  const page = 1;
  const voteCount = 1000;

  const url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&page=${page}&region=${region}&vote_count.gte=${voteCount}&include_adult=false&language=en-US`;

  console.log(`[INFO] Fetching movies from TMDB: ${url}`);

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`TMDB API request failed with status: ${res.status}`);
    }

    const data = await res.json();
    const movies = processMovieData(data);
    return NextResponse.json({ movies, totalPages: data.total_pages });
  } catch (error) {
    console.error(`[ERROR] Unexpected error: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to fetch movies due to an unexpected error" },
      { status: 500 }
    );
  }
}
