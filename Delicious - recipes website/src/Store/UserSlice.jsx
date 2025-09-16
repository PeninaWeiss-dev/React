import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    name: "",
    email: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        createUser: (state, action) => {
            state.name = action.payload.fullName
            state.email = action.payload.Email
        }
    }  
})

export const { createUser } = userSlice.actions
export default userSlice.reducer;  