import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [inPlaylist, setInPlaylist] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  useEffect(() => {
    if (id) {
      fetchMovieDetails();
      checkIfInPlaylist();
    }
  }, [id]);

  const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch movie details");
      }

      const data = await res.json();
      setMovie(data);
    } catch (error) {
      console.log("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkIfInPlaylist = () => {
    try {
      const playlist = JSON.parse(
        localStorage.getItem("moviePlaylist") || "[]"
      );
      const isInPlaylist = playlist.some(
        (item: any) => item.id === parseInt(id as string)
      );
      setInPlaylist(isInPlaylist);
    } catch (error) {
      console.log("Error checking playlist:", error);
    }
  };

  const togglePlaylist = () => {
    if (!movie) return;

    try {
      const playlist = JSON.parse(
        localStorage.getItem("moviePlaylist") || "[]"
      );

      if (inPlaylist) {
        const updatedPlaylist = playlist.filter(
          (item: any) => item.id !== movie.id
        );
        localStorage.setItem("moviePlaylist", JSON.stringify(updatedPlaylist));
      } else {
        const movieToAdd = {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          overview: movie.overview,
        };
        const newPlaylist = [...playlist,movieToAdd];
        localStorage.setItem('moviePlaylist',JSON.stringify(newPlaylist));
        setInPlaylist(true);
        // playlist.push(movieToAdd);
        // localStorage.setItem("moviePlaylist", JSON.stringify(updatedPlaylist));
      }

    } catch (error) {
      console.log("Error updating playlist:", error);
    }
  };

  const getRating = () => {
    return movie?.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  };

  const getReleaseYear = () => {
    return movie?.release_date ? movie.release_date.split("-")[0] : "N/A";
  };

  const getRuntime = () => {
    if (!movie?.runtime) return "N/A";
    return `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;
  };

  const getGenres = () => {
    return movie?.genres?.map((genre: any) => genre.name).join(", ") || "N/A";
  };

  if (loading) {
    return (
      <div className="bg-gray-950 min-h-screen text-white flex justify-center items-center">
        <div className="text-xl">Loading movie details...</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-gray-950 min-h-screen text-white flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Movie not found</h2>
          <Link href="/" className="text-red-600 hover:text-red-400">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="text-red-600 hover:text-red-400 mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder-image.jpg"
              }
              alt={movie.title}
              className="w-full rounded-lg"
            />
          </div>

          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-4">
              {movie.title || "Unknown Title"}
            </h1>
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="bg-red-600 px-3 py-1 rounded">
                ⭐ {getRating()}
              </span>
              <span>{getReleaseYear()}</span>
              <span>{getRuntime()}</span>
            </div>

            <div className="flex gap-4 mb-6 flex-wrap">
              <button
                onClick={togglePlaylist}
                className={`px-6 py-2 rounded font-semibold ${
                  inPlaylist
                    ? "bg-gray-600 hover:bg-gray-700"
                    : "bg-red-600 hover:bg-red-700"
                } transition-colors`}
              >
                {inPlaylist ? "Remove from Playlist" : "Add to Playlist"}
              </button>
              <Link href="/playlist">
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition-colors">
                  View My Playlist
                </button>
              </Link>
            </div>

            <p className="text-gray-300 text-lg mb-4">
              {movie.overview || "No description available."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Genres</h3>
                <p>{getGenres()}</p>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2">Language</h3>
                <p className="uppercase">{movie.original_language || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
