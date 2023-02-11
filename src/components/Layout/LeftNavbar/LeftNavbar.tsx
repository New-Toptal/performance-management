import "./LeftNavbar.css";
// import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Performance Management</h1>
            <ul>
                <li>
                    <h2 onClick={() => navigate("/income")}>new Income</h2>
                </li>
                <li>
                    <h2 onClick={() => navigate("/expense")}>new Expense</h2>
                </li>
                <li>
                    <h2 onClick={() => navigate("/analysis")}>Analysis</h2>
                </li>
            </ul>
        </>
    );
}