import React from "react";
import Search from "./Nav_header/Search/Search";
import ContentFilter from "./Nav_header/Content_filter/ContentFilter";




const Header = () => {
    return (
<header>
    <a className="logo" href="src/components/Header/Header#">Blogger Platform</a>
    <h3>Blogs</h3>
    <Search />
    {/*<ContentFilter/>*/}

</header>
    )
}

export default Header;