import React from 'react';
import {Button, Container, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction} from "../../redux/actions";

function UserListPage() {

    const dispatch = useDispatch()

    const {users} = useSelector(state => state.usersReducer)

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

    return (
        <Container>
            <h1 className="b-5">Users list</h1>
            <Button
                variant="success"
                onClick={getUsers}
                className="my-5"
            >get users</Button>{/*без него уходит ы цикл*/}


            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user =>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </Container>
    );
}

export default UserListPage;