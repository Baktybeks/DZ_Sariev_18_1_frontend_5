import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Number from "../../components/number/Number";
import {addNumberActions, clearNumberActions, inputNumberActions} from "../../redux/actions/actions";


function AddNumber() {

    const dispatch = useDispatch()

    const {inputNumber, numbers} = useSelector(state => state.numberReducer)

    const changeInput = (event) => {
        dispatch(inputNumberActions(event.target.value))
    }

    const addNumber = () => {
        dispatch(addNumberActions(inputNumber))
    }

    const clearNumbers = () => {
        dispatch(clearNumberActions())
    }

    return (
        <div>
            <input type="number"
                   onChange={changeInput}
                   placeholder="number"
                   value={inputNumber}
            />
            <button onClick={addNumber}>add</button>
            <button onClick={clearNumbers}>clear</button>
            {numbers.map((number, index)=> <Number key={index} inputNumber={number}/>)}
        </div>
    );
}

export default AddNumber;