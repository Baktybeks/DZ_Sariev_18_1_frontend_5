import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function CountPage() {
    const counter = useSelector(state => state.count)
    const dispatch = useDispatch()
    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }


    return (
        <div>
            <h1>счетчик: {counter}</h1>
            <button className="btn btn-success"
                    onClick={increment}>+
            </button>
            <button className="btn btn-danger"
                    onClick={decrement}>-
            </button>
        </div>
    );
}

export default CountPage;