import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {plusNumbers, minusNumbers, multiplyNumbers, divideNumbers} from "../../store/calculatorSlice";

function Calculator(props) {
    const dispatch = useDispatch()

    const {answer} = useSelector(state => state.calculatorReducer)

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

    const checkValue = () => {
        if (input.valueOne === "") {
            alert("value 1 empty")
        } else if (input.valueSecond === "") {
            alert("value 2 empty")
        } else {
            return true
        }
    }

    const plusFunc = () => {
        if (checkValue()) {
            dispatch(plusNumbers(input))
            setInput({valueOne: "", valueSecond: ""})
        }
    }
    const minusFunc = () => {
        if (checkValue()) {
            dispatch(minusNumbers(input))
            setInput({valueOne: "", valueSecond: ""})
        }
    }
    const multiplyFunc = () => {
        if (checkValue()) {
            dispatch(multiplyNumbers(input))
            setInput({valueOne: "", valueSecond: ""})
        }
    }
    const divideFunc = () => {
        if (checkValue()) {
            dispatch(divideNumbers(input))
            setInput({valueOne: "", valueSecond: ""})
        }
    }

    return (
        <div>
            <input type="number"
                   onChange={changeInput}
                   name="valueOne"
                   value={input.valueOne}
            />
            <input type="number"
                   onChange={changeInput}
                   name="valueSecond"
                   value={input.valueSecond}
            />
            <button onClick={plusFunc}>+</button>
            <button onClick={minusFunc}>-</button>
            <button onClick={multiplyFunc}>*</button>
            <button onClick={divideFunc}>/</button>
            <h1>-------------------------------</h1>
            <h1>Answer = {answer}</h1>
        </div>);
}

export default Calculator;