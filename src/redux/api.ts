// src/redux/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.BASE_API_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 0,
  tagTypes: ["User"],
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  endpoints: () => ({}),
})
