import Link from "next/link";

const Signup: React.FC = () => {
  return (
    <div className="flex justify-center items-center  min-h-screen  bg-gray-950  ">
      <div className="shadow-2xl rounded-lg bg-transparent  px-20 py-8 border-t-4 border-cyan-800 ">
        <h1 className="text-2xl mb-4 text-white flex justify-center ">
          Signup
        </h1>
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="username"
            className="p-1 px-10 border border-gray-500 shadow-sm rounded text-white bg-transparent focus:outline-none focus:ring-0 focus:border-b-blue-400"
          />
          <input
            type="text"
            placeholder="email"
            className="p-1 px-10 border border-gray-500 shadow-sm rounded text-white bg-transparent focus:outline-none focus:ring-0 focus:border-b-blue-400"
          />
          <input
            type="text"
            placeholder="password"
            className="p-1 px-10 border border-gray-500 shadow-sm rounded text-white bg-transparent focus:outline-none focus:ring-0 focus:border-b-blue-400"
          />
          <Link href="./" className="flex justify-center">
            <button className="shadow-sm px-28 py-1.5 hover:scale(105) text-white bg-gradient-to-r  to-green-400 rounded">
              signup
            </button>
          </Link>
          <p className="ml-1 text-gray-500 ">
            Have an account?
            <span className="text-green-400 ml-2">
              <Link href="/auth/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
