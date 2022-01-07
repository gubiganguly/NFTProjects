import React from 'react'
import './YourNft.css'

const YourNft = ({id, name, image, link, setSelectedNft}) => {


    function clickNft() {
        setSelectedNft([image, link])
    }

    return (
        <div id="yourNft" className='yourNft' onClick={clickNft}>
            <img  src={image} alt=''/>
            <div className='details'>
                <div className='name'>
                    {name} <div className='id'>#{id}</div>
                </div>
            
            </div>
            <a className='viewButton' target="_blank" href={link}>
                View
            </a>
        </div>
    )
}

export default YourNft
