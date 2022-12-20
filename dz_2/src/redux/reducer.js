const initialState = {
    value: {valueOneS: '', valueSecondS: ''},
    answer: "",
    answerSecond: "",
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
    } else if (action.type === "MINUS_SECOND") {
        return {
            ...state, answerSecond: Number(action.payload.valueOneS) -
                Number(action.payload.valueSecondS), value: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "MULTIPLY_SECOND") {
        return {
            ...state, answerSecond: Number(action.payload.valueOneS) *
                Number(action.payload.valueSecondS), value: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "DIVIDE_SECOND") {
        return {
            ...state, answerSecond: (Number(action.payload.valueOneS) /
                Number(action.payload.valueSecondS)).toFixed(1), value: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "PLUS_SECOND") {
        return {
            ...state, answerSecond: Number(action.payload.valueOneS) +
                Number(action.payload.valueSecondS), value: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "VALUE_SECOND") {
        return {...state, value: action.payload}
    }

    return state
}