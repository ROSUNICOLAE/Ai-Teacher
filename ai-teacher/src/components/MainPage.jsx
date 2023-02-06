import React from "react";
import Body from "./Body";
import CountSection from "./countSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainPage() {
    return (
        <div>
            <Navbar />
            <Body />
            <CountSection />
            <Footer />
        </div>
    );
}

export default MainPage;