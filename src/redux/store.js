import { configureStore, createSlice } from "@reduxjs/toolkit";
import { weatherApi } from "./weather";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { todayApi } from "./trip";
export const heroSlice = createSlice({
  name: "weather",
  initialState: {},
  reducers: {},
});

export const { ChangeFilter, Add, Remove, FromLocal } = heroSlice.actions;

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [todayApi.reducerPath]: todayApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    weatherApi.middleware,
    todayApi.middleware,
  ],
});
setupListeners(store.dispatch);
