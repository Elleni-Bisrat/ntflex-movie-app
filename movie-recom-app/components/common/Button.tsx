import { ButtonProps } from "@/interface";
const Button: React.FC<ButtonProps> = ({ children ,className}) => {
  return (
    <div>
      <button className={`${className}bg-blue-500 text-white py-1 px-4 m-4 rounded-md cursor-pointer hover:shadow-lg font-semibold`}>
        {children}
      </button>
    </div>
  );
};
export default Button;
