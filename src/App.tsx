import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Search from "./components/Header/Nav_header/Search/Search";
import ContentFilter from "./components/Header/Nav_header/Content_filter/ContentFilter";

function App() {
    return (
        <div>
            <Header/>
            <Nav/>
            <ContentFilter/>
        </div>
    )
}

export default App;
