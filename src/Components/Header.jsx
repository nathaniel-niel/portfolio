import React, {useEffect, useState}from "react";
import profilePict from "../assets/userProfile.png"
import { Link } from "react-router-dom";

const  Header = () => {
    
    const [isTextEmpty, setTextBool] = useState(false);
    var i = 0;
    const txt = "Nathaniel Andrian";
    const speed = 250;

    function typing() {
        if(isTextEmpty === false) {
            if(i < txt.length) {
                document.getElementById("name").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typing, speed);
                setTextBool(true);
            }
        }
        
    };

   useEffect(() => {
         typing();

   }, []);

    return (
        <header className="bg-center bg-cover h-screen">
            {/* <Link
                    to="/project"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                    Go to Project Route
                </Link> */}
                <div className="h-4/5 flex items-center justify-center">
                    <div >
                        <img src={profilePict} alt=""  className="mx-auto mb-6"/>    
                        <h3 className="text-white text-lg xs:text-xl md:text-3xl font-mono mb-3">Hi! my name is</h3>
                        <h1 id="name" className="text-gray-100 font-black text-3xl xs:text-5xl md:text-6xl font-mono mb-9"></h1>
                        <div className=" flex ">
                            <div className="pr-8">
                                <a className="px-6 py-4 bg-magenta-red rounded-lg hover:bg-pink-800 text-white pr-8">
                                    <span className="pr-1 font-semibold ">Download CV </span>
                                    <i className="fas fa-arrow-down"></i>
                                </a>
                            </div>
                            <div>
                                <a href="#aboutme" className="px-6 py-4 bg-cyan rounded-lg hover:bg-cyan-600  text-white">
                                    <span className="pr-1 font-semibold ">Learn More </span>
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </div>
                            

                        </div>
                        
                    </div>
                </div>
        </header>

    );

};


export default Header;
