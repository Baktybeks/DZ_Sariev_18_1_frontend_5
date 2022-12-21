import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function CalculatorThird() {

    const dispatch = useDispatch()

    const answerThird = useSelector(state => state.answerThird)

    const initialState = {
        valueOneT: "",
        valueSecondT: ""
    }

    const [input, setInput] = useState(initialState)


    const changeInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const checkValue = () => {
        if (input.valueOneT === "") {
            alert("value 1 empty")
        } else if (input.valueSecondT === "") {
            alert("value 2 empty")
        } else {
            return true
        }
    }

    const plus = () => {
        if (checkValue()) {
            dispatch({
                type: "PLUS_THIRD",
                payload: input
            })
        }
        setInput({valueOneT: "", valueSecondT: ""})
    }

    const minus = () => {
        if (checkValue()) {
            dispatch({
                type: "MINUS_THIRD",
                payload: input
            })
        }
        setInput({valueOneT: "", valueSecondT: ""})
    }

    const multiply = () => {
        if (checkValue()) {
            dispatch({
                type: "MULTIPLY_THIRD",
                payload: input
            })
        }
        setInput({valueOneT: "", valueSecondT: ""})
    }

    const divide = () => {
        if (checkValue()) {
            dispatch({
                type: "DIVIDE_THIRD",
                payload: input
            })
        }
        setInput({valueOneT: "", valueSecondT: ""})
    }

    return (
        <div>
            <input type="number"
                   onChange={changeInput}
                   name="valueOneT"
                   value={input.valueOneT}
            />
            <input type="number"
                   onChange={changeInput}
                   name="valueSecondT"
                   value={input.valueSecondT}
            />
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <h1>-------------------------------</h1>
            <h1>Answer = {answerThird}</h1>
        </div>
    );
}

export default CalculatorThird;