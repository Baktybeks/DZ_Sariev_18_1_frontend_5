import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

function Calculator() {

    const dispatch = useDispatch()

    const answer = useSelector(state => state.answer)

    const initialState = {
        valueOne: "",
        valueSecond: ""
    }

    const [input, setInput] = useState(initialState)

    const changeInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const plus = () => {
        if (input.valueOne === "") {
            alert("value1 empty")
        } else if (input.valueSecond === "") {
            alert("value2 empty")
        } else {
            dispatch({
                type: "PLUS",
                payload: input
            })
        }
    }

    const minus = () => {
        if (input.valueOne === "") {
            alert("value1 empty")
        } else if (input.valueSecond === "") {
            alert("value2 empty")
        } else {
            dispatch({
                type: "MINUS",
                payload: input
            })

        }
    }

    const multiply = () => {
        if (input.valueOne === "") {
            alert("value1 empty")
        } else if (input.valueSecond === "") {
            alert("value2 empty")
        } else {
            dispatch({
                type: "MULTIPLY",
                payload: input
            })
        }
    }

    const divide = () => {
        if (input.valueOne === "") {
            alert("value1 empty")
        } else if (input.valueSecond === "") {
            alert("value2 empty")
        } else {
            dispatch({
                type: "DIVIDE",
                payload: input
            })
        }
    }

    return (
        <div>
            <input type="number"
                   onChange={changeInput}
                   name="valueOne"/>
            <input type="number"
                   onChange={changeInput}
                   name="valueSecond"/>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <h1>-------------------------------</h1>
            <h1>Answer = {answer}</h1>
        </div>
    );
}

export default Calculator;