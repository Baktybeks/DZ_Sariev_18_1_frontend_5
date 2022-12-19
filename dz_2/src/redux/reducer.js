const initialState = {
    answer: ""
}

export default function reducer(state = initialState, action) {
    if (action.type === "PLUS") {
        return {
            ...state, answer: Number(action.payload.valueOne) +
                Number(action.payload.valueSecond)
        }
    } else if (action.type === "MINUS") {
        return {
            ...state, answer: Number(action.payload.valueOne) -
                Number(action.payload.valueSecond)
        }
    } else if (action.type === "MULTIPLY") {
        return {
            ...state, answer: Number(action.payload.valueOne) *
                Number(action.payload.valueSecond)
        }
    } else if (action.type === "DIVIDE") {
        return {
            ...state, answer: (Number(action.payload.valueOne) /
                Number(action.payload.valueSecond)).toFixed(1)
        }
    }

    return state
}