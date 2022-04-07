import { createSlice } from "@reduxjs/toolkit";

export const statisticSlice = createSlice(
  {
    name: "statistic",
    initialState: {
      clickCount: {}
  },
    reducers: {
      updateClicks: (state, {payload} ) => {
        const cpyState = {...state.clickCount};
        const keys = Object.keys(cpyState);
        const payloadEventName = Object.keys(payload)[0]
        if (keys.includes(payloadEventName)) {
          cpyState[payloadEventName] ++
        }else {
          cpyState[payloadEventName] = payload[payloadEventName];
        }
        console.log(cpyState)
        state.clickCount = cpyState
      },
    },
  },
);

export const { updateClicks } = statisticSlice.actions;
