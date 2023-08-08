import React from 'react'
import './CatCard.scss'
import { Link } from "react-router-dom"
function CatCard({ item }) {
    console.log()
    return (
        <Link to='/gigs?cat=design'>
            <div className="catCard">
                <img src={item.img} alt="" />
                <span className="desc">{item.desc}</span>
                <span className="title">{item.title}</span>
            </div>
        </Link>
    )
}

export default CatCard