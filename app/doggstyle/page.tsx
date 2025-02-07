"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../redux/dog/dogSlice";
import { RootState, AppDispatch } from "../redux/store";



export default function DogsPage (){
    const dispatch = useDispatch<AppDispatch>();
    const { dogs, status } = useSelector((state: RootState) => state.dog);
  
    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchDogs());
      }
    }, [status, dispatch]);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Doggs</h1>
        {status === "loading" && <p>Atualizando...</p>}
        {status === "failed" && <p className="text-red-500">Falha ao atualizar.</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dogs.map((dog: any, index: number) => (
            <div key={index} className="overflow-hidden">
              <img src={dog.url} alt="Dog" className="w-full h-48 object-cover rounded-lg" />
            </div>
          ))}
          
        </div>
          <div className="px-3 py-1.5 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition duration-300 text-center">
          <button onClick={() => dispatch(fetchDogs())}>Atualizar fotos</button>
        </div>
      </div>

      
      
    );
  };
  
