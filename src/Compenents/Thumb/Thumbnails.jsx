import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../Thumb/Thumbnails.css"

export default function Thumbnails({ setValue, value }) {

    const [index, setIndex] = useState()

    const handleClick = (index) => {
        setValue(images[index]);
        setIndex(index)
    }


    const images = [
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoBXjTFhrEUABXUBHBCbIZvtc9pggeiJzXQ&usqp=CAU", alt: "Mon TItre", id: 0 },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfeBcgBpmCezbkMi-ne9uom_ZRFMHaEvPxw&usqp=CAU", alt: "Mon TItre", id: 1 },
        { url: "https://fs-prod-cdn.nintendo-europe.com/media/images/06_screenshots/games_5/nintendo_switch_download_software_2/nswitchds_randomheroesgoldedition/NSwitchDS_RandomHeroesGoldEdition_05.jpg", alt: "Mon TItre", id: 2 },
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02u4RS5oza7CJSgvmfaQfoOnl6q1laArMDUZWaPSYXDXYLQ6c54UusGBUyFu4oJGijrU&usqp=CAU", alt: "Mon TItre", id: 3 },
        { url: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.jpg", alt: "Mon TItre", id: 4 },
    ]
    return (
        <div className='wrapper_image'>
            {images.map((image, index) =>

                <img
                    onClick={() => { handleClick(index) }}
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    style={{ border: value.id === image.id ? '5px solid black' : "none" }}
                />
            )}
        </div>
    )
}
