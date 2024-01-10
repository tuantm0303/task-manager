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
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((_, index) => index !== action.payload)
    }
  },
});

export const { addJob, listJob, deleteJob } = jobSlice.actions

export default jobSlice.reducer;
