import React from 'react'
import './YourNft.css'
import{useState, useEffect} from 'react'; 
import axios from 'axios';


const YourNft = ({ nft, setSelectedNft}) => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6IjI2YmM4MTg1ZTRiYTRjNzA3NDAwODljYzY2Njg4MzQ1NTdjNjY5OGFlYzRiY2JmOGVlMDVjZTVkMGU4YTY5OGU1ZjQwNDQ5ZGQ4ZDgwZWQ1IiwiaWF0IjoxNjQxNTM1MTgxLCJuYmYiOjE2NDE1MzUxODEsImV4cCI6MTY3MzA3MTE4MSwic3ViIjoiOTE2ODc0MSIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.Au0BojaaHj3uF_ghpEOyG_xcE-HSagLN7ETemoCH7LphflYLncFP7zUx48CWbm-ReBiwILJ330I_d0Raync'

    const [clickedNft, setClickedNft] = useState(nft)

    const printify = axios.create({
        baseURL: 'https://api.printify.com/v1/',
        headers: {'Authorization': `Bearer ${token}`}
    })


    // NFT image
    const data = {
        "file_name": `${nft.image}`,
        "url": `${nft.image}`
    }
    // QRCode image
    const QRdata = {
        "file_name": `${nft.link_image}`,
        "url": `${nft.link_image}`
    }
    

    async function clickNft() {
        
        if (clickedNft.image_id === '') {
            // upload NFT image
            let uploadImage = await printify.post(
                'uploads/images.json',
                data
            )
            clickedNft.image_id = uploadImage.data.id
            // upload QR image
            let uploadQRImage = await printify.post(
                'uploads/images.json',
                QRdata
            )
            clickedNft.link_image_id = uploadQRImage.data.id
        }

        setSelectedNft(clickedNft)
        
    }

    //console.log(nft)
    

    return (
        <div id="yourNft" className='yourNft' onClick={clickNft}>
            <img  src={nft.image} alt=''/>
            <div className='details'>
                <div className='name'>
                    {nft.name} <div className='id'>#{nft.id}</div>
                </div>
            
            </div>
            <a className='viewButton' target="_blank" href={nft.link}>
                View
            </a>
        </div>
    )
}

export default YourNft
