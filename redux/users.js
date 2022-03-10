import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async ( dispatch, getState ) => {
        return await fetch('http://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
    }
)

const initialState = {
    users:[],
    status:null
  }
  
  export const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
      [getUsers.pending]:(state, action)=>{
            state.status = "Loading...."
      },
      [getUsers.fulfilled]:(state, action)=>{
            state.status = "success";
            state.users = action.payload
      },
      [getUsers.rejected]:(state, action)=>{
        state.status = "Failed"
    },

    },
  })

  export default usersSlice.reducer


