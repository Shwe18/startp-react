import React, { useState } from "react";
import Link from '@/utils/ActiveLink';
import * as Icon from 'react-feather';

const NavbarStyleTwo = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom navbar-style-two">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/ivr-services">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className=" nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Solutions <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/ivr-services" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">IVR Services</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/tollfree" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Tollfree</a>
                                            </Link>
                                        </li>
 
                                        <li className="nav-item">
                                            <Link href="/missed-call-service" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Missed Call Service</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/employee-tracking-solution" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Employee Tracking Solution</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/betyphon" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">BeTyphon : Mobile CRM</a>
                                            </Link>
<<<<<<< HEAD
                                        </li>

     



                                        <li className="nav-item">
                                            <Link href="/bigdata-analytics" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Bigdata Analytics</a>
                                            </Link>
=======
>>>>>>> eb960c37308006744eecc50c5de63348a3ca108a
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    SMS <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/text-sms" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Text SMS </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/voice-sms" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Voice SMS </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Customized Solutions <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/click-to-call" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Click To Call </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/audio-conference" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Audio Conference </a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/call-centre-dialer" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Call Centre Dialer </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        
                                    </ul>
                                </li>

                                <li className="nav-item">
                                            <Link href="/aboutus" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                            </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Use Cases <Icon.ChevronDown />
                                        </a>
                                    </Link> 

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/virtual-number" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Virtual Number</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/cloud-telephony" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Cloud Telephony</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/digital-agency-portfolio" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Digital Agency Portfolio</a>
                                            </Link>
                                        </li>
  
                                        <li className="nav-item">
                                            <Link href="/pc-repair" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">PC Repair</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-1" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Style 1</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Style 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Style 3</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Pricing <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Features <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/features" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Features</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/feature-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Features Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Services <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/services-1" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 1</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services-2" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 2</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services-3" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 3</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services-4" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 4</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/services-5" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Style 5</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/service-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Services Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/feedback" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Feedback</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    Projects <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/projects-1" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Project Style 1</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/projects-2" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Project Style 1</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/project-details" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Project Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/team" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Team</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/pricing" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/#" activeClassName="active">
                                                <a onClick={e => e.preventDefault()} className="nav-link">
                                                    User <Icon.ChevronDown />
                                                </a>
                                            </Link>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/login" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Login</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/sign-up" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Sign Up</a>
                                                    </Link>
                                                </li>

                                                {/* <li className="nav-item">
                                                    <Link href="/forgot-password" activeClassName="active">
                                                        <a onClick={toggleNavbar} className="nav-link">Forgot Password</a>
                                                    </Link>
                                                </li> */}
                                            </ul> 
                                        </li>
                                    
                                        <li className="nav-item">
                                            <Link href="/faq" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">FAQ's</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/coming-soon" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/404" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            Partner With Us <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/shop" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Shop</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/product-details" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Products Details</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/cart" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Cart</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/checkout" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Checkout</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={e => e.preventDefault()} className="nav-link">
                                            About <Icon.ChevronDown />
                                        </a>
                                    </Link>

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/blog-1" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-4" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar 2</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-5" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Grid 3</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-6" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar 3</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/blog-details" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contact" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="others-option">
                            <Link href="/cart">
                                <a className="cart-wrapper-btn">
                                    <Icon.ShoppingCart /> 
                                    <span>0</span>
                                </a>
                            </Link>

                            <Link href="/contact">
							    <a className="btn btn-light">Support</a>
                            </Link>

                            <Link href="/login">
							    <a className="btn btn-primary">Login</a>
                            </Link>
						</div> */}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavbarStyleTwo;