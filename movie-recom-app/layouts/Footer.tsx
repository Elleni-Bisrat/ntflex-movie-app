import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-gray-800 flex justify-around text-white py-4">
        <div className="mt-4">
          <h1 className="text-3xl">MovieMate</h1>
        </div>

        <div className="flex flex-col mt-4 text-sm">
          <Link href="./">Home</Link>
          <Link href="./">Discover</Link>
          <Link href="./">favorite</Link>
          <Link href="./">rating</Link>
          <Link href="./">geners</Link>
          <Link href="./">subscription</Link>
        </div>
        <div className="mt-4">
          <p className="text-sm w-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            nostrum!
          </p>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-3 text-gray-400">
        ©{new Date().getFullYear()} MovieMate.All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
