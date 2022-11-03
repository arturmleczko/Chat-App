import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  OriginalFetchUsersResponse,
  TransformedFetchUserResponse,
} from './api.types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://randomuser.me/api',
  }),
  endpoints: builder => ({
    fetchUsers: builder.query<TransformedFetchUserResponse, number | void>({
      query: (results = 10) => `?results=${results}`,
      transformResponse: (originalResponse: OriginalFetchUsersResponse) => {
        return originalResponse.results.map(
          ({
            name: { first: firstName, last: lastName },
            location: { city, country },
            picture: { medium, thumbnail },
            dob,
            phone,
          }) => {
            const date = new Date(dob.date);

            const month = date.toLocaleString('en', { month: 'long' });
            const day = date.getDay();
            const year = date.getFullYear();

            return {
              name: `${firstName} ${lastName}`,
              location: `${city}, ${country}`,
              dob: `${month} ${day}, ${year}`,
              picture: {
                medium,
                thumbnail,
              },
              phone,
            };
          }
        );
      },
    }),
  }),
});

export const { useFetchUsersQuery } = apiSlice;
