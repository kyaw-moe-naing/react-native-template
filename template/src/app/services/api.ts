import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
// import {RootState} from 'app/store';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  // prepareHeaders: (headers, {getState}) => {
  //   const token = (getState() as RootState).auth.token;
  //   if (token) {
  //     headers.set('Authorization', `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
