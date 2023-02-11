import React, { ReactNode } from "react";
import "./Layout.css";
import LeftNavbar from "./LeftNavbar";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default ({ children }: Props) => {
    return (
        <>
            <div className="layout">
                <div className="layout-left-navbar">
                    <LeftNavbar />
                </div>
                <div className="layout-body">
                    <div className="layout-header">
                        <Header />
                    </div>
                    <div className="layout-content">
                        {children}
                    </div>
                    <div className="layout-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}