import React, { Children } from 'react'
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout1({children,className}) {
    // console.log(className);
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer className={className}/>
        </>
    )
}
