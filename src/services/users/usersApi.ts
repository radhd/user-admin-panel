import { baseApi } from "../baseApi";
import { ENDPOINTS_URL_ENUM } from "../constants/endpointsUrl";
import type {
  ITransformedUserResponse,
  IUsersApiResponse,
} from "@/services/users/types";
import type { IAddUserResponse, IAddUserRequest } from "./types/addUser.types";
import { setUsers, updateUser } from "./usersState";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ENDPOINTS_URL_ENUM.getAllUsers,
      transformResponse: (response: IUsersApiResponse) => ({
        transformed: response.users.map((user) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          age: user.age,
          role: user.role,
        })),
        raw: response.users,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUsers(data.transformed));
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      },
      // providesTags: [INVALIDATES_TAGS_ENUM.Users],
    }),

    addUser: builder.mutation<IAddUserResponse, IAddUserRequest>({
      query: (newUser) => ({
        url: ENDPOINTS_URL_ENUM.addUser,
        method: "POST",
        body: newUser,
        // invalidatesTags: [INVALIDATES_TAGS_ENUM.Users],
      }),
    }),

    updateUser: builder.mutation({
      query: ({ id, ...updatedUser }) => ({
        url: `${ENDPOINTS_URL_ENUM.getAllUsers}/${id}`,
        method: "PUT",
        body: updatedUser,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch }) {
        dispatch(updateUser({ id, ...patch } as ITransformedUserResponse));
      },
      // invalidatesTags: [INVALIDATES_TAGS_ENUM.Users],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
} = usersApi;
