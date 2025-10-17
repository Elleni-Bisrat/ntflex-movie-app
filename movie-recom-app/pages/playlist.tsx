import { useState, useEffect } from 'react';
import MovieCard from "../components/common/MovieCard";
import Link from 'next/link';

export default function Playlist() {
  const [playlist, setPlaylist] = useState<any[]>([]);

  useEffect(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem('moviePlaylist') || '[]');
    setPlaylist(savedPlaylist);
  }, []);

  const removeFromPlaylist = (movieId: number) => {
    const updatedPlaylist = playlist.filter(movie => movie.id !== movieId);
    setPlaylist(updatedPlaylist);
    localStorage.setItem('moviePlaylist', JSON.stringify(updatedPlaylist));
  };

  const clearPlaylist = () => {
    setPlaylist([]);
    localStorage.setItem('moviePlaylist', '[]');
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/" className="text-red-600 hover:text-red-400 mb-2 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-3xl font-bold">My Movie Playlist</h1>
            <p className="text-gray-400">{playlist.length} movies in playlist</p>
          </div>
          
          {playlist.length > 0 && (
            <button 
              onClick={clearPlaylist}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {playlist.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl text-gray-400 mb-4">Your playlist is empty</h2>
            <p className="text-gray-500 mb-6">Start adding movies to build your playlist!</p>
            <Link href="/discover">
              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold transition-colors">
                Browse Movies
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {playlist.map((movie) => (
              <div key={movie.id} className="relative">
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average}
                />
                <button
                  onClick={() => removeFromPlaylist(movie.id)}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  title="Remove from playlist"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}