import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numberOfCakes: 20,
  }

export const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers:{
        increment: (state) => {
            state.numberOfCakes += 1;
        },
        decrement: (state) => {
            state.numberOfCakes -= 1;
        },
        reset : (state) => {
            state.numberOfCakes = 0;
        },
        incrementByAmount: (state,action) => {
            state.numberOfCakes = state.numberOfCakes + action.payload;
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = cakeSlice.actions;

export default cakeSlice.reducer