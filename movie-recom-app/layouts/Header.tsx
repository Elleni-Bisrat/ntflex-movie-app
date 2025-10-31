"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/SearchContext";
import { useState } from "react";
import { Search, Menu, X, Play, Star } from "lucide-react";

const Header: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      router.push("/discover");
      setIsMobileMenuOpen(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      router.push("/discover");
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/discover", label: "Discover" },
    { href: "/favorite", label: "Favorites" },
    { href: "/rated", label: "Top Rated" },
    { href: "/playlist", label: "Playlists" },
    { href: "/subscribe", label: "Premium"},
  ];

  return (
    <>
      {/* Main Navigation Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold font-Marcellus bg-gradient-to-r from-gray-900 via-red-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                    MovieMate
                  </h2>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1 text-gray-700 hover:text-green-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full border border-gray-300 bg-gray-50  rounded-lg py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none  transition-all duration-200"
                />
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link href="/auth/login">
                <button className="bg-white text-gray-700 hover:text-red-600 hover:bg-red-50 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200">
                  Sign In
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 shadow hover:shadow-md">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="relative">
                <button
                  onClick={handleSearchSubmit}
                  className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <Search className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {/* Mobile Search */}
              <div className="mb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-700 hover:text-red-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-red-50 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex space-x-2 pt-3 border-t border-gray-200">
                <Link
                  href="/auth/login"
                  className="flex-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full bg-transparent text-gray-700 border border-gray-300 rounded-lg py-2 text-xs font-medium">
                    Sign In
                  </button>
                </Link>
                <Link
                  href="/auth/signup"
                  className="flex-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-lg py-2 text-xs font-medium">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
