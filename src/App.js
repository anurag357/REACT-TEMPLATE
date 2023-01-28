import React from "react"
import AppSection from "./AppSection";
import CardSec from "./CardSec";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

import Navbar from "./Navbar";

const App = () =>{
    return(
        <div>
            <Navbar />
            <HeroSection />
            <CardSec />    
            <AppSection />    
            <Footer />
        </div>
    )
}


export default App;