import React from 'react'
import './ProjectCard.scss'
import { Link } from "react-router-dom"
function ProjectCard({ item }) {
    
    return (
        <Link to='/' className="Link">
            <div className="ProjectCard">
              <img src={item.img} alt=""/>
              <div className="info">
                <img src={item.pp}/>
                <div className="text">
                <h2>{item.cat}</h2>
                <span>{item.username}</span>
                </div>
              </div>
            </div>
        </Link>
    )
}

export default ProjectCard