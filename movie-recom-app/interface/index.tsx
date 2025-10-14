export interface ButtonProps {
  children: React.ReactNode;
  className?:string;
}
export interface LayoutProps{
    children:React.ReactNode;
}

export interface MovieCardProps{
  title:string;
  poster:string;
  rating?:number;
}