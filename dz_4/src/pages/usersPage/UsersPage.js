import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions/actions";
import User from "../../components/user/User";

function UsersPage() {

    const dispatch = useDispatch()

    const {users, user} = useSelector(state => state.usersReducer)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    const emptyObject = !Object.keys(user).length

    return (
        <div>
            {
                (!emptyObject) &&
                <ul>
                    <li>more info:</li>
                    <li>name:{user.name}</li>
                    <li>address:{user.address.street}</li>
                    <li>username:{user.username}</li>
                    <li>email:{user.email}</li>
                </ul>
            }
            {
                (emptyObject) &&
                <ul>
                <li>more info:</li>
                <li>name:</li>
                <li>address:</li>
                <li>username:</li>
                <li>email:</li>
                </ul>
            }

            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user}/>)}
        </div>
    );
}

export default UsersPage;