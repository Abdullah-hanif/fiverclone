import React from 'react'
import './Featured.scss'
function Featured() {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>Find the right <i>freelance </i> service, right away </h1>
                    <div className="search">
                        <div className="searchinput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" placeholder="Try building mobile apps" />

                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web design</button>
                        <button>Wordpress</button>
                        <button>Web Design</button>
                        <button>Logo Design</button>
                        <button>AI services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured