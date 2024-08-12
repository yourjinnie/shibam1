import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div>
            <nav className="navbar" style={{opacity: 1, transform: 'translateY(0px)'}}>
                <div className="navbar-container container"><input type="checkbox"  />
                    <div className="hamburger-lines"><span className="line line1" /><span className="line line2" /><span className="line line3" /></div>
                    <ul className="menu-items " style={{opacity: 1, transform: 'translateY(0px)'}}>
                    <li><Link className="font-face-futur-md-bt" to="/industry4">Industry 4.0</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/case-studies">Case Studies</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/sectors">Sectors</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/services">Services</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/about">About Us</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/career">Careers</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/contact"><button className="btn font-face-futur-md-bt" style={{cursor:"pointer"}} >Contact
                            Us</button></Link></li>
                    </ul>
                    <div className="logo" style={{opacity: 1, transform: 'translateY(0px)'}}><Link className="font-face-futur-md-bt" to="/"><img src="/assets/Sixdlogo-bf5233dd.png" className="logo-img" alt="logo" /></Link></div>
                </div>
            </nav>
            <section>
            <div id="top" style={{top: "0px"}} >
                <nav role="navigation" className="navigation">
                <div className="navigation__logo"><Link to="/"><img src="/assets/Sixdlogo-bf5233dd.png" className="manc" /></Link>
                </div>
                <div className="navigation__wrapper"><input type="checkbox" id="hamburger" /><label htmlFor="hamburger" className="navigation__button"><span /><span /><span /></label>
                    <ul className="navigation__links">
                    <li><Link className="font-face-futur-md-bt" to="/industry4">Industry 4.0</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/case-studies">Case Studies</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/sectors">Sectors</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/services">Services</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/about">About Us</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/career">Careers</Link></li>
                    <li><Link className="font-face-futur-md-bt" to="/contact"> 
                    <button className="btn font-face-futur-md-bt">Contact Us</button></Link></li>
                    </ul>
                </div>
                </nav>
            </div>
            </section>
            </div>
    </>
  )
}
