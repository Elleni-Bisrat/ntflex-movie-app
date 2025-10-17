import Header from "../layouts/Header";
import MovieCard from "../components/common/MovieCard";
import Link from "next/link";
import { movies } from "@/movies";
import { useState, useEffect } from "react";
export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await res.json();
        setMovies(data.results || []);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <div
        className="relative h-[70vh] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/.png')" }}
      >
        <div className="bg-black/60  p-8 rounded-lg text-center ">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome To <span className="text-red-600">MovieMate</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Discover, watch, and rate your favorite movies all in one place.
          </p>
          <Link href="/discover">
            <button className="mt-6 bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 rounded text-white font-semibold hover:scale-105 transition-transform">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {movies.map((movie, index) => (
            <MovieCard
              key={index || movie.id}
              id={movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
