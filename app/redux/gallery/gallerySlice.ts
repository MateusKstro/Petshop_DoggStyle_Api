import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PoodleSkeleton from "../../../public/Poodle-punk-Petlove.jpg";
import TosaBebe from "../../../public/tosa-bebe-1170x731-1.jpg";

interface Image {
  id: number;
  url: string;
  
}

interface GalleryState {
  images: Image[];
  selectedImage: Image | null;
}

const initialState: GalleryState = {
  images: [
    { id: 1, url: PoodleSkeleton.src} ,
    { id: 2, url: TosaBebe.src},
  ],
  selectedImage: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    
    setSelectedImage: (state, action: PayloadAction<Image | null>) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { setSelectedImage } = gallerySlice.actions;
export default gallerySlice.reducer;
