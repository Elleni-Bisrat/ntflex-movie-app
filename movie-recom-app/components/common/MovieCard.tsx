import { MovieCardProps } from "@/interface";
import Image from "next/image";
const MovieCard: React.FC<MovieCardProps> = ({ title, poster, rating }) => {
  return (
    <div className="bg-gray-900 rounded overflow-hidden shadow-mg hover:scale-105 transition-transform duration-300 cursor-pointer">
      <Image
        src={poster}
        alt={title}
        width={200}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-3 text-center">
        <h3 className="text-white text-lg font-semibold truncate">{title}</h3>
        {rating && <p className="text-white text-sm mt-1">⭐{rating}</p>}
      </div>
    </div>
  );
};
export default MovieCard;
