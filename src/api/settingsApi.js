import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const settingsApi = createApi({
  reducerPath: 'settingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => `categories`,
    }),
    getLogo: build.query({
      query: () => `header`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetLogoQuery } = settingsApi;
