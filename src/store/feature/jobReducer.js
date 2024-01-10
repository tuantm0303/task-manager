import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  job: {},
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobs?.push(action.payload);
    },
    listJob: (state, action) => {
      state.jobs = action.payload
    }
  },
});

export const { addJob, listJob } = jobSlice.actions

export default jobSlice.reducer;
