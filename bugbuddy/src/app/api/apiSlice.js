import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bugbuddy.onrender.com' }),
    tagTypes: ['Bug', 'User'],
    endpoints: builder => ({})
})