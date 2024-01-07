import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'userId',
  initialState: 'hello',
  reducers: {
    setserId: (state, action) => {
      //   state.userId = action;
      console.log(`state:${state}, action${action}`);
    },
  },
});
const userReducer = user.reducer;
export const { setUserId } = user.actions;
export default userReducer;
