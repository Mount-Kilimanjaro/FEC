
import { createSlice } from '@reduxjs/toolkit';


export const stateSlice = createSlice({
  name: 'state',
  initialState: {
   data: [{name:'david'}],
   name: "david"
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload.data
    },
  }
});

export const {setData} = stateSlice.actions;