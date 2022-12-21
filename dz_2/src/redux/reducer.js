const initialState = {
    valueS: {valueOneS: '', valueSecondS: ''},
    answer: "",
    answerSecond: "",
    answerThird: "",
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
    // второй калькулятор
    else if (action.type === "MINUS_SECOND") {
        return {
            ...state, answerSecond: Number(action.payload.valueOneS) -
                Number(action.payload.valueSecondS), valueS: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "MULTIPLY_SECOND") {
        return {
            ...state, answerSecond: Number(action.payload.valueOneS) *
                Number(action.payload.valueSecondS), valueS: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "DIVIDE_SECOND") {
        return {
            ...state, answerSecond: (Number(action.payload.valueOneS) /
                Number(action.payload.valueSecondS)).toFixed(1), valueS: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "PLUS_SECOND") {
        return {
            ...state, answerSecond: Number(action.payload.valueOneS) +
                Number(action.payload.valueSecondS), valueS: {valueOneS: '', valueSecondS: ''}
        }
    } else if (action.type === "VALUE_SECOND") {
        return {...state, valueS: action.payload}
    }
    // третий калькулятор (комбо первого и второго)

    else if (action.type === "PLUS_THIRD") {
        return {
            ...state, answerThird: Number(action.payload.valueOneT) +
                Number(action.payload.valueSecondT)
        }
    }
    else if (action.type === "MINUS_THIRD") {
        return {
            ...state, answerThird: Number(action.payload.valueOneT) -
                Number(action.payload.valueSecondT)
        }
    }
    else if (action.type === "MULTIPLY_THIRD") {
        return {
            ...state, answerThird: Number(action.payload.valueOneT) *
                Number(action.payload.valueSecondT)
        }
    }
    else if (action.type === "DIVIDE_THIRD") {
        return {
            ...state, answerThird: (Number(action.payload.valueOneT) /
                Number(action.payload.valueSecondT)).toFixed(1)
        }
    }
    return state
}