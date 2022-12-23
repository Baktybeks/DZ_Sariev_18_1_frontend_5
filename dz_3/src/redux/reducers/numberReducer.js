import {types} from "../types";


const initialState = {
    inputNumber: "",
    numbers: [],
    numberPlus: ""
}

export default function numberReducer(state = initialState, action) {
    switch (action.type) {
        case types.INPUT_NUMBER:
            return {...state, inputNumber: action.payload}
        case types.ADD_NUMBER:
            return {
                ...state,
                numbers: [...state.numbers, [Number(state.numberPlus) + Number(action.payload)]],
                numberPlus: Number(state.numberPlus) + Number(action.payload),
                inputNumber: ""
            }
        case types.CLEAR_NUMBER:
            return {...state, numbers: [], numberPlus:"", inputNumber: ""}
        default:
            return state
    }
}