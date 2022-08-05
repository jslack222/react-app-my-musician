import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home"
import Friends from "./Friends/Friends"
import Music from "./Music/Music"
import CreateCard from "./Create/Create"



export default (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/create" element={<CreateCard/>}></Route>
    </Routes>
)