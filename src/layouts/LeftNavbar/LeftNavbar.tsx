import "./LeftNavbar.css";
import React from "react";

export default () => {
    return (
        <>
            <h1>Performance Management</h1>
            <ul>
                <li>
                    <h2><a href="#">new Income</a></h2>
                </li>
                <li>
                    <h2><a href="#">new Expense</a></h2>
                </li>
                <li>
                    <h2><a href="#">Analysis</a></h2>
                </li>
            </ul>
        </>
    );
}