import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const bugsAdapter = createEntityAdapter({
  sortComparer: (a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1),
});

const initialState = bugsAdapter.getInitialState();

export const bugsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBugs: builder.query({
      query: () => '/bugs',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedBugs = responseData.map((bug) => {
          bug.id = bug._id;
          return bug;
        });
        return bugsAdapter.setAll(initialState, loadedBugs);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: 'Bug', id: 'LIST' },
            ...result.ids.map((id) => ({ type: 'Bug', id })),
          ];
        } else return [{ type: 'Bug', id: 'LIST' }];
      },
    }),
    addNewBug: builder.mutation({
      query: (initialBug) => ({
        url: '/bugs',
        method: 'POST',
        body: {
          ...initialBug,
        },
      }),
      invalidatesTags: [{ type: 'Bug', id: "LIST" }],
    }),
    updateBug: builder.mutation({
      query: (initialBug) => ({
        url: '/bugs',
        method: 'PATCH',
        body: {
          ...initialBug,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Bug', id: arg.id },
      ],
    }),
    deleteBug: builder.mutation({
      query: ({ id }) => ({
        url: `/bugs`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Bug', id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetBugsQuery,
  useAddNewBugMutation,
  useUpdateBugMutation,
  useDeleteBugMutation,
} = bugsApiSlice;

// returns the query result object
export const selectBugsResult = bugsApiSlice.endpoints.getBugs.select();

// creates memoized selector
const selectBugsData = createSelector(
  selectBugsResult,
  (bugsResult) => bugsResult.data // normalized state object with ids & entities
);

// Selector to get bugs for a specific team
// Selector to get bugs for a specific team
// Selector to get bugs for a specific team
export const selectBugsByTeam = createSelector(
    selectBugsData,
    (_, teamId) => teamId,
    (bugs, teamId) => {
      console.log('All Bugs:', bugs); // Log all bugs
      console.log('Team ID:', teamId); // Log teamId
  
      // Check if bugs or bugs.entities is undefined
      if (!bugs || !bugs.entities) {
        console.error('Invalid bugs data:', bugs);
        return [];
      }
  
      // Extract values from the entities object
      const bugsArray = Object.values(bugs.entities);
  
      // Filter bugs based on the teamId
      const bugsForTeam = bugsArray.filter((bug) => bug.team.toString() === teamId);
  
      console.log('Bugs for Team:', bugsForTeam); // Log bugs for the team
      return bugsForTeam;
    }
  );
  
  

// getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllBugs,
  selectById: selectBugById,
  selectIds: selectBugIds,
} = bugsAdapter.getSelectors((state) => selectBugsData(state) ?? initialState);
