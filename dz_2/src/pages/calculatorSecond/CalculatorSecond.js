import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function CalculatorSecond() {
    const dispatch = useDispatch()
    const value = useSelector(state => state.value)
    const answerSecond = useSelector(state => state.answerSecond)

    const changeInputSecond = (event) => {
        dispatch({
            type: "VALUE_SECOND",
            payload: {...value, [event.target.name]: event.target.value}
        })
    }

    const checkValue = () => {
        if (value.valueOneS === "") {
            alert("valueSecond 1 empty")
        } else if (value.valueSecondS === "") {
            alert("valueSecond 2 empty")
        } else {
            return true
        }
    }
    const plus = () => {
        if (checkValue() === true) {
            dispatch({
                type: "PLUS_SECOND",
                payload: value
            })
        }
    }
    const minus = () => {
        if (checkValue() === true) {
            dispatch({
                type: "MINUS_SECOND",
                payload: value
            })
        }
    }
    const multiply = () => {
        if (checkValue() === true) {
            dispatch({
                type: "MULTIPLY_SECOND",
                payload: value
            })
        }
    }
    const divide = () => {
        if (checkValue() === true) {
            dispatch({
                type: "DIVIDE_SECOND",
                payload: value
            })
        }
    }


    return (
        <div>
            <input type="number"
                   onChange={changeInputSecond}
                   name="valueOneS"
                   value={value.valueOneS}
            />
            <input type="number"
                   onChange={changeInputSecond}
                   name="valueSecondS"
                   value={value.valueSecondS}
            />
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <h1>-------------------------------</h1>
            <h1>Answer = {answerSecond}</h1>
        </div>
    );
}


export default CalculatorSecond;