import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todayApi = createApi({
  reducerPath: "todayApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
  }),
  tagTypes: ["Today"],
  endpoints: (builder) => ({
    getTodayWeather: builder.query({
      query: ({ city }) =>
        `/${city.name}/today?unitGroup=metric&include=days&key=D4DVJ94KJYY2H2LTNFSVCGY5R&include=days&contentType=json`,
      providesTags: ["Today"],
    }),
  }),
});

export const { useGetTodayWeatherQuery } = todayApi;
