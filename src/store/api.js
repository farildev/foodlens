import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: () => ({}),
  tagTypes: ['FOODS', 'FOOD'],
});

export default api;
