"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setSelectedImage } from "../redux/gallery/gallerySlice";

export default function Gallery()  {
  const images = useSelector((state: RootState) => state.gallery.images);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="w-200 h-200 overflow-hidden flex items-center justify-center border rounded-lg shadow-md hover:shadow-lg transition">
          <img
            src={image.url}
            alt={`Imagem ${image.id}`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => dispatch(setSelectedImage(image))}
            
          />
        </div>
      ))}
    </div>
  );
};


