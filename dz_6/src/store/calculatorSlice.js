import {createSlice} from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
    name: "calculatorSlice",
    initialState: {
        answer: ""
    },
    reducers: {
        plusNumbers: (state, action) => {
            state.answer = Number(action.payload.valueOne) +
                Number(action.payload.valueSecond)
        },
        minusNumbers: (state, action) => {
            state.answer = Number(action.payload.valueOne) -
                Number(action.payload.valueSecond)
        },
        multiplyNumbers: (state, action) => {
            state.answer = Number(action.payload.valueOne) *
                Number(action.payload.valueSecond)
        },
        divideNumbers: (state, action) => {
            state.answer = (Number(action.payload.valueOne) /
                Number(action.payload.valueSecond)).toFixed(1)
        }
    }
})

export const {plusNumbers, minusNumbers, multiplyNumbers, divideNumbers} = calculatorSlice.actions

export default calculatorSlice.reducer