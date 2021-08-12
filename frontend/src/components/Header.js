import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hello, I am Rad</h1>
                <Typed
                    className="typed-text"
                    strings={["Cloud Engineer", "Data Engineer", "AWS Solution Architect", "Web Designer"]}
                    typeSpeed = {80}
                    backSpeed = {100}
                    loop = {true}
                />
                <p>This page has been viewed<a id="counter"></a> times</p>
            </div>
        </div>
    )
}

export default Header
