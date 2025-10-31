import React , {createContext,useState,useContext,useEffect} from "react";
interface Movie{
    id:number;
    title:string;
    poster:string;
    rating:number;
};
interface FavoritesContextType{
    favorites:Movie[];
    addToFavorites:(movie:Movie)=>void;
    removefromFavorites:(id:number)=>void;
    isFavorite:(id:number)=>boolean;
}