import React from "react";
import {Routes, Route} from  "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit"
import StreamList from "./streams/StreamList";
import  StreamShow from "./streams/StreamShow";
import Header from "./Header";



const App = () => {
    return(
        <div className="ui container">
            <Header />
            <Routes>
                <Route path="/"  element={<StreamList />} />
                <Route path="/streams/:id"  element={<StreamShow />} />
                <Route path="streams/new"  element={<StreamCreate />} />
                <Route path="streams/delete/:id"  element={<StreamDelete />} />
                <Route path="streams/edit/:id"  element={<StreamEdit />} />
            </Routes>
        </div>
    );
}

export default App;