import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Definição do thunk para buscar imagens de cachorros de uma API externa
export const fetchDogs = createAsyncThunk('dogs/fetchDogs', async () => {
  const response = await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10');
  return response.json();
});

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: {
    dogs: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dogs = action.payload;
      })
      .addCase(fetchDogs.rejected, (state, action) => {
        state.status = 'failed';
      });
  }
});

export default dogsSlice.reducer;
