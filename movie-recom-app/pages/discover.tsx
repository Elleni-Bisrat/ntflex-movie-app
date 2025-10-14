"use client";
import React, { useState } from "react";
import MovieCard from "@/components/common/MovieCard";
import { useSearch } from "@/context/SearchContext";

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);
  const { searchTerm, setSearchTerm } = useSearch();

  const categories = ["All", "Action", "Romance", "Comedy", "Sci-Fi", "Horror"];

  const movies = [
    { id: 1, title: "Inception", poster: "/image.png", rating: 8.7, genre: "Sci-Fi" },
    { id: 2, title: "Titanic", poster: "/image1.png", rating: 9.7, genre: "Romance" },
    { id: 3, title: "Joker", poster: "/image2.png", rating: 8.9, genre: "Action" },
    { id: 4, title: "Interstellar", poster: "/image3.png", rating: 9.0, genre: "Sci-Fi" },
    { id: 5, title: "The Conjuring", poster: "/image.png", rating: 7.9, genre: "Horror" },
    { id: 6, title: "The Mask", poster: "/assets/image.png", rating: 7.9, genre: "Comedy" },
  ];

  const filteredMovies = movies.filter(
    (movie) =>
      (selectedCategory === "All" || movie.genre === selectedCategory) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Discover Movies</h1>

      <div className="flex flex-wrap justify-between items-center mb-12 gap-3">
        <input
          type="text"
          placeholder="🔍 Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-white px-4 py-2 rounded-md w-full sm:w-1/3 outline-none"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <select className="bg-gray-800 text-white px-3 py-1 rounded outline-none">
          <option>Sort By</option>
          <option>Rating</option>
          <option>Title</option>
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredMovies.slice(0, visibleCount).map((movie) => (
          <MovieCard key={movie.id} title={movie.title} poster={movie.poster} rating={movie.rating} />
        ))}
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
