import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: number;
  age: number;
  role: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    // TODO: FILTERS ADDITIONAL TASK
    filterAdminUsers: (state) => {
      state.users = state.users.filter((user) => user.role === "admin");
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const { setUsers, clearUsers } = usersSlice.actions;
export default usersSlice.reducer;
