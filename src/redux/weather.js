import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
  }),
  tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ city, start_date, end_date }) =>
        `/${city.name}/${start_date}/${end_date}?key=D4DVJ94KJYY2H2LTNFSVCGY5R&include=days&elements=datetime,tempmax,tempmin,icon,temp`,
      providesTags: ["Weather"],
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
