import React from 'react'
import './Gigs.scss';
import { useState } from "react";
import GigCard from "./../../components/gigCard/GigCard";
import { gigs } from "./../../data";
function Gigs() {
  const [sort, setSort] = useState("Sales");
  const [open, setOpen] = useState(false);
  const reSort = (type) => {
    setSort(type);
    setOpen(false)
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs"> FIVER  GRAPHICS & DESIGN   </span>
        <h1>
          AI Artists
        </h1>
        <p>   Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span> budget</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">
              Sort by
            </span>
            <span className="sortType">
              {sort === "sales" ? ' Best Selling' : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && <div className="rigthMenu">
              {sort === "sales" ? <><span onClick={() => reSort("createdAt")}>Newest</span></> :
                <span onClick={() => reSort("sales")}>Best selling</span>}
            </div>}
          </div>

        </div>
        <div className="cards">
          {gigs.map(gig => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Gigs