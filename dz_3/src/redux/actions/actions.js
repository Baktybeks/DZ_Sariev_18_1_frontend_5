import {types} from "../types";

export const inputNumberActions = (inputValue) => {
    return {
        type: types.INPUT_NUMBER,
        payload: (inputValue)
    }
}

export const addNumberActions = (number) => {
    return {
        type: types.ADD_NUMBER,
        payload: number
    }
}



export const clearNumberActions = () => {
    return {
        type: types.CLEAR_NUMBER
    }
}