import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function Nav() {
    return (
        <header className='nav_bar'>
            <nav>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to={"ArrayState"}>ArrayState</Link>
                <Link className='link' to={"Users"}>Users</Link>
                <Link className='link' to={"LifesCycles"}>LifeCycles</Link>
                <Link className='link' to={"Films"}>Films</Link>
                <Link className='link' to={"Converter"}>Converter</Link>
                <Link className='link' to={"Carousel"}>Carousel</Link>
                <Link className='link' to={"Borne"}>Borne</Link>
                <Link className='link' to={"Students"}>Students</Link>
            </nav >
        </header >
    )
}
