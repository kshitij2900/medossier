import React from 'react'
import CrouselItem from './CrouselItem'

export default function Crousel() {
    return (
    <>
        <div id="carouselExample" className="carousel slide " style={{height:'100vh'}}>
        <div className="carousel-inner">
            <CrouselItem/>
            <CrouselItem/>
            <CrouselItem/>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </>
    )
}
