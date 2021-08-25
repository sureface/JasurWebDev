import React from 'react';
import Navigation from "../conponents/nav";
import Pdpclass from "../conponents/pdpclass";

const Todoapp = () => {
    return (
        <div>
            <Navigation />
            <div className="space"></div>
            <Pdpclass />
        </div>
    );
};

export default Todoapp;