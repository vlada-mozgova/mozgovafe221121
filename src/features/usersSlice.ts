import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/user";

import users from '../data/initData.json';

const initialState: IUser[] = users;

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersData: state => state,
    }
})

export default usersSlice.reducer;