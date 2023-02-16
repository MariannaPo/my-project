import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Search from "./components/Header/Nav_header/Search/Search";
import ContentFilter from "./components/Header/Nav_header/Content_filter/ContentFilter";
import Main from "./components/Main/Main";

function App() {
    return (
        <div>
            <Header/>
            <Nav/>
            <ContentFilter/>
            <Main/>
        </div>
    )
}

export default App;
