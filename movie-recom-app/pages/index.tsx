import Link from "next/link";
import { useState, useEffect } from "react";
import MovieCard from "@/components/common/MovieCard";
export default function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
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

  useEffect(() => {
    if (movies.length > 0) {
      const interval = setInterval(() => {
        setCurrentBackgroundIndex((prev) =>
          prev === movies.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [movies.length]);

  const currentMovie = movies[currentBackgroundIndex];

  return (
    <div className="bg-white min-h-screen text-white">
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-end transition-all duration-1000 ease-in-out overflow-hidden"
        style={{
          backgroundImage: currentMovie
            ? `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`
            : "linear-gradient(135deg, #962525be, #2d1b1b)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/10 to-gray-950/50"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 space-y-8">
          <div>
          <h1 className="text-6xl font-bold text-center  ">
            Welcome To <span className="bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 bg-clip-text text-transparent">MovieMate</span>
          </h1>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div className="flex flex-col items-end space-y-4">
              <div className="flex gap-3">
                {movies.slice(0, 6).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBackgroundIndex(index)}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      index === currentBackgroundIndex
                        ? "bg-red-600 border-red-600 scale-125"
                        : "bg-transparent border-white/50 hover:border-white"
                    }`}
                  />
                ))}
              </div>

              {movies.length > 1 && (
                <div className="text-right">
                  <p className="text-gray-400 text-sm mb-2">Up Next</p>
                  <p className="text-white font-semibold">
                    {
                      movies[(currentBackgroundIndex + 1) % movies.length]
                        ?.title
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </div>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-8 text-black border-l-4 border-red-600 pl-4">
          Trending Movies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id || index}
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
