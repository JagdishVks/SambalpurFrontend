import { createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { axiosInstance } from "../../Services";


export const fetchStatusDetails = createAsyncThunk(
    'status/fetchLocation',
    async (Loc_ID) => {
      const response = await axiosInstance.get(`/StatusGetAllLocs/${Loc_ID}`);
      return response.data; 
    }
  );


const StatusDetails_reducer=createSlice({
    name: 'status',
    initialState: {
      Statusinfo: [],
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
        .addCase(fetchStatusDetails.pending, (state) => {
          state.status = 'loading'; // Set status to loading
        })
        // Handle the fulfilled state
        .addCase(fetchStatusDetails.fulfilled, (state, action) => {
          state.status = 'succeeded'; // Set status to succeeded
          state.Statusinfo = action.payload; // Store the user data
        })
        // Handle the rejected state
        .addCase(fetchStatusDetails.rejected, (state, action) => {
          state.status = 'failed'; // Set status to failed
          state.error = action.error.message; // Store the error message
        });
    },
  });
  
//   export const { clearUser } = getallLocaionSlice.actions;
  
  export default StatusDetails_reducer.reducer;
  
