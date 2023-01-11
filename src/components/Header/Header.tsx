import React from "react";
import Search from "./Nav_header/Search/Search";



const Header = () => {
    return (
<header>
    <a className="logo" href="src/components/Header/Header#">Blogger Platform</a>
    <h3>Blogs</h3>
    <Search />
</header>
    )
}

export default Header;