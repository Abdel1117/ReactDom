import React from 'react'
import { useState, useEffect } from 'react'
import "./Thumbnail.css"
export default function Thumbnail({ value, setValue, index, setIndex }) {

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <>
            <img src={value.url} alt="" />
        </>
    )
}
