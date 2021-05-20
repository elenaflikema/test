import React from 'react';
import { UsersContainer } from '../StyledItems';
import { useSelector } from "react-redux";

const Users = () => {

    const users = useSelector(store => store.users);

    return (
        <UsersContainer>
            <div>

            </div>
        </UsersContainer>
    );
};

export default Users;
