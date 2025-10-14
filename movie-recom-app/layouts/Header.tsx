"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext";

const Header: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/discover");
    }
  };

  return (
    <div>
      <div className="flex justify-between bg-gray-800 gap-4 p-2">
        <div className="m-4">
          <h2 className="text-2xl font-bold font-Marcellus cursor-pointer bg-gradient-to-r from-green-400 to-red-600 bg-clip-text text-transparent">
            MovieMate
          </h2>
        </div>

        <div className="text-sm flex gap-4 mt-4 text-white items-center">
          <Link href="/">Home</Link>
          <Link href="/discover">Discover</Link>
          <Link href="/favorite">Favorite</Link>
          <Link href="/rated">Top Rated</Link>
          <Link href="/genres">Genres</Link>
          <Link href="/subscribe">Subscription</Link>

          <input
            type="text"
            placeholder="🔎 Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none text-white px-2 border-b border-gray-600 focus:border-green-400 transition-all duration-300"
          />
        </div>

       
        <div className="flex gap-2">
          <Link href="/auth/login">
            <Button className="bg-gradient-to-r to-red-600 text-white rounded">Login</Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-gradient-to-r from-red-600 text-white rounded">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
