import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CVType } from '../../../@types';
import { initialCV } from '../slices/CVSlice';

export const CVAPI = createApi({
  reducerPath: 'CVAPI',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ['CV'],
  endpoints: (builder) => ({
    getCV: builder.query({
      query: () => `/cv`,
      providesTags: ['CV'],
    }),
    retrieveCV: builder.query({
      query: (id) => `/cv/${id}`,
    }),
    createCV: builder.mutation({
      query: () => ({
        url: `/cv`,
        method: 'POST',
        body: initialCV,
      }),
      invalidatesTags: ['CV'],
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
    deleteCV: builder.mutation<{ success: boolean; id: string }, number>({
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
  useGetCVQuery,
  useRetrieveCVQuery,
  useCreateCVMutation,
  useDeleteCVMutation,
} = CVAPI;
