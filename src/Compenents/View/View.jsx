import React from 'react'
import { useState } from 'react'
import Thumbnail from '../Thumb/Thumbnail'
import Thumbnails from '../Thumb/Thumbnails'
import "./View.css"

export default function View() {

    const [value, setValue] = useState("");
    const [index, setIndex] = useState();
    const handleLeftClick = (index) => {

    }


    const handleRightClick = () => {

    }

    return (
        <>
            <section id='wrapper_carrousel'>
                <button onClick={handleLeftClick} id='left_arrow'> &lt; </button>
                {/* Thumbnail */}
                <Thumbnail value={value} setValue={setValue} index={index} setIndex={setIndex} />
                {/* ThumbnailS */}
                <button onClick={handleRightClick} id='right_arrow'>&gt;</button>
            </section>
            <Thumbnails value={value} setValue={setValue} />

        </>
    )
}
