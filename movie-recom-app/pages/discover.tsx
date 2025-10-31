"use client";
import React, { useState } from "react";
import MovieCard from "@/components/common/MovieCard";
import { useSearch } from "@/context/SearchContext";
import { useEffect } from "react";
import { Search, Menu, X, Play, Star } from "lucide-react";

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(2);
  const { searchTerm, setSearchTerm } = useSearch();
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url =
          searchTerm.trim() === ""
            ? `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`
            : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results || []);
        console.log("Fetched movies:", data.results);
      } catch (err) {
        console.log("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, [searchTerm, API_KEY]);
  const categories = ["All", "Action", "Romance", "Comedy", "Sci-Fi", "Horror"];
  const genreMap: Record<string, number> = {
    Action: 28,
    Romance: 10749,
    Comedy: 35,
    "Sci-Fi": 878,
    Horror: 27,
  };
  const filteredMovies = movies.filter((movie) => {
    if (selectedCategory === "All") return true;
    if (!movie.genre_ids) return false;
    return movie.genre_ids.includes(genreMap[selectedCategory]);
  });

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold text-black mb-6">Discover Movies</h1>

      <div className="flex flex-wrap justify-between items-center mb-12 gap-3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-black px-4 py-2 rounded-md w-full sm:w-1/3 outline-none placeholder-gray-400"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "border border-gray-400 text-black hover:bg-green-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <select className="bg-white text-black border border-gray-400 px-3 py-1 rounded outline-none">
          <option>Sort By</option>
          <option>Rating</option>
          <option>Title</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMovies.slice(0, visibleCount).map((movies) => {
          return (
            <MovieCard
              key={movies.id}
              title={movies.title}
              poster={
                movies.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
                  : "/placeholder.png"
              }
              rating={movies.vote_average?.toFixed(1)}
            />
          );
        })}
      </div>

      {visibleCount < filteredMovies.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="bg-gradient-to-r text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Load More ⭳
          </button>
        </div>
      )}
    </div>
  );
};

export default Discover;
