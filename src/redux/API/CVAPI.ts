import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CVType } from '../../../@types';

export const CVAPI = createApi({
  reducerPath: 'CVAPI',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getCVs: builder.query({
      query: () => `/cv`,
    }),
    retrieveCV: builder.query({
      query: (id) => `/cv/${id}`,
    }),
    createCV: builder.mutation<CVType, Partial<CVType>>({
      query: (body) => ({
        url: `/cv`,
        method: 'POST',
        body,
      }),
    }),
    updateCV: builder.mutation<CVType, Partial<CVType>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `/dv/${id}`,
          method: 'PUT',
          body,
        };
      },
    }),
    deleteCV: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `/cv/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetCVsQuery,
  useRetrieveCVQuery,
  useCreateCVMutation,
  useDeleteCVMutation,
} = CVAPI;
