import React from 'react'
import '../../App.css'
const Nav = () => {
    return (
        <div>
            <header className="header container">
                <a href="#">
                    <img src={require("../../image/microsoft_PNG.png")} alt="" />
                </a>
                <nav className="navbar">
                    <ul className="navbar-list navbar-1">
                        <li className="navbar-link"><a href="/">MicroSoft 366</a></li>
                        <li className="navbar-link"><a href="/">Teams</a></li>
                        <li className="navbar-link"><a href="/">Windows</a></li>
                        <li className="navbar-link"><a href="/">Surface</a></li>
                        <li className="navbar-link"><a href="/">Xbox</a></li>
                        <li className="navbar-link"><a href="/">Support</a></li>
                    </ul>
                </nav>
                <div>
                    <ul className="navbar-list navbar-2">
                        <li><a href="/" className="navbar-link">All Product <i className="fa-solid fa-angle-down"></i></a></li>
                        <li><a href="/" className="navbar-link"></a><i className="fa-solid fa-magnifying-glass navbar-icons"></i></li>
                        <li><a href="/" className="navbar-link"></a><i className="fa-solid fa-bag-shopping navbar-icons"></i></li>
                        <li><a href="/" className="navbar-link"></a><i className="fa-regular fa-user navbar-icons"></i></li>
                    </ul>
                </div>

            </header>
        </div>

    )
}

export default Nav;