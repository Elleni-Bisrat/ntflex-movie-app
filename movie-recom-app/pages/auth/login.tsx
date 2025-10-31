import Link from "next/link";
import { useState } from "react";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="flex-1 bg-black/90  backdrop-blur-lg p-12 border-l border-cyan-800/50">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl  font-bold bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent mb-4">
              WELCOME BACK
            </h2>
            <p className="text-gray-400 text-lg animate-pulse delay-700">
              Sign in to continue your cinematic journey
            </p>
          </div>

          <form className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block  text-cyan-300 text-sm font-semibold mb-3 tracking-wider">
                  USERNAME
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  placeholder="Enter your username"
                  className="w-full p-2 bg-gray-900/50 border border-cyan-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-amber-300 text-sm font-semibold mb-3 tracking-wider">
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  className="w-full p-2 bg-gray-900/50 border border-amber-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-cyan-600 to-amber-600 hover:from-cyan-700 hover:to-amber-700 text-white font-bold py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              SIGN IN
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Join Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
