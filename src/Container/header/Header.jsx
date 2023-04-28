import React from 'react';
import svglogo from '../../image/microsoft-windows-11.svg';
import '../../App.css'
import './header.css'
const Header = ()=> {
  return (
    <div>
        <div className="section section-hero container">
            <div className="">
                <div className="hero-img">
                    <img src={require("../../image/Highlight-Surface-Pro-9-All-Colors-FY23HOL_VP4-1399x600.jpg")} alt=""/>
                    <div className="hero-img-content">
                        <div>
                            <span>New</span>
                            <h1 className="hero-img-content-h1">Surface Pro 9</h1>
                            <p className="hero-img-content-p">
                                Keep spirits bright with a game-changing combo of laptop power and tablet
                                flexibility—all in
                                one ultra-portable device
                            </p>
                        </div>
                        <div>
                            <a type="button" className="hero-btn" href="#">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="hero-icons">
                    <div>
                        <ul>
                            <li><a href="#"><img src={require("../../image/microsoft366.png")} alt=""/>
                                    <h2>MicroSoft</h2>
                                </a></li>
                            <li><a href="#"><img src={require("../../image/Xbox.png")} alt=""/>
                                    <h2>Xbox</h2>
                                </a></li>
                            <li><a href="#"><img src={svglogo} alt=""/>
                                    <h2>Windows 11</h2>
                                </a></li>

                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <div className="main-content-card">
                        <img src={require("../../image/Resized-Surface-Pro-9-hero.jpg")} alt=""/>
                        <div>
                            <span>New</span>
                            <h1>
                                Surface laptop 6
                            </h1>
                            <p>
                                Sophisticated style and multitasking speed powered by 12th Gen Intel® Core™ i5/i7
                                processors built on the Intel® Evo™ platform make this the perfect gift
                            </p>
                            <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="main-content-card">
                        <img src={require("../../image/xbox_content.jpg")} alt=""/>
                        <span>Latest</span>
                        <h1>
                            Xbox Series X
                        </h1>
                        <p>
                            Give thrills that'll last all year with the fastest, most powerful Xbox ever.
                        </p>
                        <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className="main-content-card">
                        <img src={require("../../image/M365 logo.png")} alt=""/>
                        <span>Free Trial</span>
                        <h1>
                            Microsoft 366
                        </h1>
                        <p>
                            Apps and features to help you turn ideas into reality, stay safer and focus on the important
                            things in life.
                        </p>
                        <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className="main-content-card">
                        <img src={require("../../image/surafaceimg.png")} alt=""/>
                        <h1>
                            Designed for today gen
                        </h1>
                        <p>
                            The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring
                            you closer to everything you love.
                        </p>
                        <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
                <div className="">
                    <div className="hero-img">
                        <img src={require("../../image/gldn-XSS-Hero-Xbox-Series-S_VP4-1260x600.jpg")} alt=""/>
                        <div className="hero-img-content hero-img-2">
                            <div>
                                <h1 className="hero-img-content-h1">Xbox Series S</h1>
                                <p className="hero-img-content-p">
                                    Next-gen performance in the smallest Xbox ever
                                    Shop now
                                </p>
                            </div>
                            <div>
                                <a type="button" className="hero-btn" href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading">
                    <h1>For Business</h1>
                </div>

                <div className="main-content">
                    <div className="main-content-card">
                        <img src={require("../../image/Resized-Surface-Pro-9-hero.jpg")} alt=""/>
                        <div>

                            <h1>
                                Surface for Business Family
                            </h1>
                            <p>
                                Surface for Business devices enable work on your team's terms with flexibility, built-in
                                security and the power they need to succeed.
                            </p>
                            <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="main-content-card">
                        <img src={require("../../image/xbox_content.jpg")} alt=""/>

                        <h1>
                            Get Microsoft Teams for free
                        </h1>
                        <p>
                            Online meetings, chat and shared cloud storage - all in one place.
                        </p>
                        <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                    <div className="main-content-card">
                        <img src={require("../../image/M365 logo.png")} alt=""/>
                        <div className="pd-2">

                            <h1>
                                Thrive in a hybrid world
                            </h1>
                            <p>
                                Discover tools, resources and strategies to help your employees succeed in the new world
                                of
                                flexible work.
                            </p>
                            <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                        </div>

                    </div>
                    <div className="main-content-card">
                        <img src={require("../../image/surafaceimg.png")} alt=""/>
                        <h1>
                            Windows 365 Cloud PC
                        </h1>
                        <p>
                            Securely stream your Windows experience from the Microsoft cloud to any device.
                        </p>
                        <a type="button" href="">Learn More <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
                <div className="main-bottom">
                    <ul className="main-bottom-list">
                        <li>Follow Us</li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;
