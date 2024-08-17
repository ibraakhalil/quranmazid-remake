import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const testSlice = createSlice({
    name: "Test slice",
    initialState: <any[]>[{ name: "ibrahim" }],
    reducers: {
        addNew: (state, action: PayloadAction<number>) => {

            state.push(action.payload)
        }
    }
})

export const testActions = testSlice.actions

export default testSlice.reducer
