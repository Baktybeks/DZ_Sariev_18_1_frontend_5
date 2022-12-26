import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUserOneAction} from "../../redux/actions/actions";

function User({userInfo}) {

    const dispatch = useDispatch()

    const getId = (event) => {
        dispatch(fetchUserOneAction(event.target.value))
    }

    return (
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.email}</li>
            <li>
                <button onClick={getId}
                        value={userInfo.id}>show info
                </button>
            </li>

        </ul>
    );
}

export default User;