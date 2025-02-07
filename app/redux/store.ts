import { configureStore } from '@reduxjs/toolkit';
import dogRecuder from './dog/dogSlice';
import galleryReducer from './gallery/gallerySlice';



export const store = configureStore({
    reducer: {
        dog: dogRecuder,    
        gallery: galleryReducer,
    },    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

