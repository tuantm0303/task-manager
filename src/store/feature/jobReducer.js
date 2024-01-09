import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  job: {},
  isFetching: false,
  isSucess: false,
  isErr: false,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => { },
});

export default jobSlice.reducer;
