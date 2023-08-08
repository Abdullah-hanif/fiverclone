import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import { Link, useLocation } from "react-router-dom"
function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])
    const currentUser = {
        id: 1,
        userName: "Akif khan",
        isSeller: true
    }
    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="Link">
                        <span className="text" style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>fiver buisness</span>
                    <span style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>Explore</span>
                    <span style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>English</span>
                    <span style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>Sign in</span>
                    {!currentUser?.isSeller && <span style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>Become a Seller</span>}
                    {!currentUser && <button style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: " 50%",
                                objectFit: 'cover'
                            }} />
                            <span style={pathname !== "/" || active == true ? { color: 'black' } : { color: 'white' }}>{currentUser?.userName}</span>
                            {open && <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link className="Link" to={'/mygigs'}>Gigs</Link>
                                        <Link className="Link" to={'/add'}>Add new gig</Link>
                                    </>
                                )}
                                <Link className="Link" to={'/orders'}>Orders</Link>
                                <Link className="Link" to={'/messages'}>Messages</Link>
                                <Link className="Link" to={'/'}>Logout</Link>
                            </div>}
                        </div>
                    )}

                </div>

            </div>
            {active || pathname !== '/' && <> <hr />
                <div className="menu">
                    <Link className="Link">Graphics & Designe</Link>
                    <Link className="Link">Video & Animation</Link>
                    <Link className="Link">Writing & Translation</Link>
                    <Link className="Link">AI Services</Link>
                    <Link className="Link">Digital marketing</Link>
                    <Link className="Link">Music & Audio</Link>
                    <Link className="Link">Programming & Tech</Link>
                    <Link className="Link">Buisness</Link>
                    <Link className="Link">Lifestyle</Link>


                </div>
            </>}
        </div>
    )
}

export default Navbar