import api from '../api';

const foodService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: ({ q, limit = 10, order = 'asc', sortBy = 'name' }) => ({
        url: `/recipes/search?q=${q}&limit=${limit}&order=${order}&sortBy=${sortBy}`,
      }),
      providesTags: ['FOODS'],
      forceRefetch: (currentArg, previousArg) => {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
    }),
    getRecipeById: builder.query({
      query: (id) => ({
        url: `/recipes/${id}`,
      }),
      providesTags: ['FOOD'],
    }),
    getRecipesByATag: builder.query({
      query: (tag) => ({
        url: `/recipes/tag/${tag}`,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllFoodsQuery,
  useGetRecipeByIdQuery,
  useGetRecipesByATagQuery,
} = foodService;
export default foodService;
