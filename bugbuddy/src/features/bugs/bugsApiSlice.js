import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

const bugsAdapter = createEntityAdapter({
  sortComparer: (a, b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
})

const initialState = bugsAdapter.getInitialState()

export const bugsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getBugs: builder.query({
          query: () => '/bugs',
          validateStatus: (response, result) => {
              return response.status === 200 && !result.isError
          },
          transformResponse: responseData => {
              const loadedBugs = responseData.map(bug => {
                  bug.id = bug._id
                  return bug
              });
              return bugsAdapter.setAll(initialState, loadedBugs)
          },
          providesTags: (result, error, arg) => {
              if (result?.ids) {
                  return [
                      { type: 'Bug', id: 'LIST' },
                      ...result.ids.map(id => ({ type: 'Bug', id }))
                  ]
              } else return [{ type: 'Bug', id: 'LIST' }]
          }
      }),
      addNewBug: builder.mutation({
          query: initialBug => ({
              url: '/bugs',
              method: 'POST',
              body: {
                  ...initialBug,
              }
          }),
          invalidatesTags: [
              { type: 'Bug', id: "LIST" }
          ]
      }),
      updateBug: builder.mutation({
          query: initialBug => ({
              url: '/bugs',
              method: 'PATCH',
              body: {
                  ...initialBug,
              }
          }),
          invalidatesTags: (result, error, arg) => [
              { type: 'Bug', id: arg.id }
          ]
      }),
      deleteBug: builder.mutation({
          query: ({ id }) => ({
              url: `/bugs`,
              method: 'DELETE',
              body: { id }
          }),
          invalidatesTags: (result, error, arg) => [
              { type: 'Bug', id: arg.id }
          ]
      }),
  }),
})

export const {
  useGetBugsQuery,
  useAddNewBugMutation,
  useUpdateBugMutation,
  useDeleteBugMutation,
} = bugsApiSlice

// returns the query result object
export const selectBugsResult = bugsApiSlice.endpoints.getBugs.select()

// creates memoized selector
const selectBugsData = createSelector(
  selectBugsResult,
  bugsResult => bugsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllBugs,
  selectById: selectBugById,
  selectIds: selectBugIds
  // Pass in a selector that returns the bugs slice of state
} = bugsAdapter.getSelectors(state => selectBugsData(state) ?? initialState)