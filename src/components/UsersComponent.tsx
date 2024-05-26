import React, {useEffect, useState, FC} from 'react';
import {userApiService} from "../services/api.service";
import {IUserModel} from "../model/IUserModel";

const UsersComponent: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);


    return (
        <div>
            {users.map(user => <div key={user.id}>
                <ul key={user.id}>
                    <li>name - {user.name} <br/>username - {user.username}</li>
                </ul>
            </div>)}
        </div>
    );
};

export default UsersComponent;