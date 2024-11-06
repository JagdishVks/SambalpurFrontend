import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {axiosInstance}  from '../../Services'



export const fetchLocations = createAsyncThunk(
  'locations/fetchLocation',
  async () => {
    const response = await axiosInstance.get(`/all-locs`);
    return response.data; 
  }
);


const getallLocationSlice = createSlice({
    name: 'locations',
    initialState: {
      Locationinfo: [],
      status: 'idle', 
      error: null,
    },
    reducers: {
    //   clearUser(state) {
    //     state.Locationinfo = null; 
    //   },
    },

    extraReducers: (builder) => {
      builder
        // Handle the pending state
        .addCase(fetchLocations.pending, (state) => {
          state.status = 'loading'; // Set status to loading
        })
        // Handle the fulfilled state
        .addCase(fetchLocations.fulfilled, (state, action) => {
          state.status = 'succeeded'; // Set status to succeeded
          state.Locationinfo = action.payload; // Store the user data
        })
        // Handle the rejected state
        .addCase(fetchLocations.rejected, (state, action) => {
          state.status = 'failed'; // Set status to failed
          state.error = action.error.message; // Store the error message
        });
    },
  });
  
//   export const { clearUser } = getallLocaionSlice.actions;
  
  export default getallLocationSlice.reducer;
  
