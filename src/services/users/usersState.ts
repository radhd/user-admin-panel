import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITransformedUserResponse } from "./types";

interface UsersState {
  users: ITransformedUserResponse[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<ITransformedUserResponse[]>) => {
      state.users = action.payload;
    },
    // TODO: FILTERS ADDITIONAL TASK
    filterAdminUsers: (state) => {
      state.users = state.users.filter((user) => user.role === "admin");
    },
    updateUser: (state, action: PayloadAction<ITransformedUserResponse>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUsers, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
