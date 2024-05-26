import React, {useEffect, useState, FC} from 'react';
import {postApiService, userApiService} from "../services/api.service";
import {IPostModel} from "../model/IPostModel";


const PostsComponent: FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        postApiService.getAllUsers().then(value => setPosts(value.data))
    }, []);


    return (
        <div>
            {posts.map(post => <div>
                <ul  key = {post.userId}>
                    <li>userId - {post.userId} <br/> title - {post.title}<br/> body - {post.body}</li>
                </ul></div>)}
        </div>
    );
};

export default PostsComponent;