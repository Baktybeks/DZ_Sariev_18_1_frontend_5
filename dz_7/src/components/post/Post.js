import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {getPost} from "../../store/postsSlice";
import {useDispatch } from "react-redux";


function Post({postInfo}) {
    const dispatch = useDispatch()

    const getId = (event) => {
        dispatch(getPost(event.target.value))
    }

    return (
        <>
            <Card className="text-center">
                <Card.Header>{postInfo.title}</Card.Header>
                <Card.Body>
                    <Button variant="info"
                            onClick={getId}
                            value={postInfo.id}>more info</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Post;