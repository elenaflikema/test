import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer } from '../StyledItems';

const Navbar = () => {

    return (
        <NavbarContainer>
            <div>
                <Link to="/todos">Task management</Link>
            </div>
            <div>
                <Link to="/users">User management</Link>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;