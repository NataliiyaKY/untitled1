import React, {useEffect, useState, FC} from 'react';
import {commentsApiService} from "../services/api.service";
import {ICommentModel} from "../model/ICommentModel";


const CommentsComponent: FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        commentsApiService.getAllUsers().then(value => setComments(value.data))
    }, []);


    return (
        <div>
            {comments.map(comment => <div>
                <ul  key = {comment.postId}>
                    <li>postId - {comment.postId} <br/> name - {comment.name}<br/> email - {comment.email}<br/> body - {comment.body}</li>
                </ul></div>)}
        </div>
    );
};

export default CommentsComponent;