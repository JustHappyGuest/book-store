import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Menu pointing>
            <Link to="/">
                <Menu.Item
                    name='Home'
                />
            </Link>

            <Link to="/">
                <Menu.Item
                    name='Home'
                />
            </Link>

            <Link to="/">
                <Menu.Item
                    name='Home'
                />
            </Link>
        </Menu>
    )
}

export default Header;