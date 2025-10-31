import React from "react";
import Link from "next/link";
const Signup: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 ">
      <div className="flex-1 bg-black/90 backdrop-blur-lg p-12 border-1 border-cyan-800/50 ">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold  bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent mb-4">
              WELCOME BACK
            </h2>
            <p className="text-gray-400 text-lg animate-pulse delay-700 ">
              Sign up to continue your cinematic journy
            </p>
          </div>
          <form action="" className="space-y-8">
            <div className="space-y-8">
              <div>
                <label
                  htmlFor=""
                  className="block  text-cyan-300 text-sm-font-semibold mb-3 tracking-wider"
                >
                  USERNAME
                </label>
                <input
                  type="text"
                  placeholder="Enter YOur username"
                  className=" w-full p-2 bg-gray-900/50 border border-cyan-800  rounded-lg text-white placeholder-gray-600 text-md focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-50/20 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block  text-amber-300 text-sm-font-semibold mb-3 tracking-wider"
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  placeholder="Enter YOur username"
                  className=" w-full p-2 bg-gray-900/50 border border-cyan-800  rounded-lg text-white placeholder-gray-600 text-md focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-50/20 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block  text-cyan-300 text-sm-font-semibold mb-3 tracking-wider"
                >
                  PASSWORD
                </label>
                <input
                  type="text"
                  placeholder="Enter YOur username"
                  className=" w-full p-2 bg-gray-900/50 border border-cyan-800  rounded-lg text-white placeholder-gray-600 text-md focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-50/20 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block  text-amber-300 text-sm-font-semibold mb-3 tracking-wider"
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  type="text"
                  placeholder="Enter YOur username"
                  className=" w-full p-2 bg-gray-900/50 border border-cyan-800  rounded-lg text-white placeholder-gray-600 text-md focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-50/20 transition-all duration-300"
                />
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-cyan-600 to-amber-600 hover:from-cyan-700 hover:to-amber-700 text-white font-bold py-2 rounded-lg transition-all duration-300 transform hover:scale-105shadow-lg shadow-cyan-500/25">
              SIGNUP
            </button>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-500">
              Have an account?
              <Link
                href="/auth/login"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
