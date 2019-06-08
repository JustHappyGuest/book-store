import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Menu pointing>
      <Menu.Menu>
        <Link to="/">
          <Menu.Item name="Home" />
        </Link>

        <Link to="/cart/">
          <Menu.Item name="Cart" />
        </Link>

        <Link to="/">
          <Menu.Item name="Home" />
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
