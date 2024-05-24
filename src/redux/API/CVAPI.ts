import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { initialCV } from '../../data/initialValues';
import { CVType } from '../../../@types';

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
          url: `/cv/${id}`,
          method: 'PUT',
          body,
        };
      },
    }),
    deleteCV: builder.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `/cv/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['CV'],
    }),
  }),
});

export const {
  useGetCVQuery,
  useRetrieveCVQuery,
  useCreateCVMutation,
  useUpdateCVMutation,
  useDeleteCVMutation,
} = CVAPI;
