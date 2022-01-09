import React from 'react'
import YourNft from './YourNft'
import './YourNftList.css'
import axios from 'axios'
import QRCode from 'qrcode';



const YourNfts = ({ setSelectedNft }) => {

    
    // if account = 0;  return <Connect Wallet />
    if (localStorage.getItem('account') === 0) {
        return (
            <div className='connectWalet'>
                Connect Wallet
            </div>
        )
    }

    // get user nfts
    function getUserNfts() {
        axios.get(
        `https://testnets-api.opensea.io/assets?owner=${localStorage.getItem('account')}&order_direction=asc`
        ).then((response) => {
            localStorage.setItem('yourNfts', JSON.stringify(response.data.assets))
        })
    }
    getUserNfts()
    let YourNfts = JSON.parse(localStorage.getItem('yourNfts'))
    

    // if YourNfts.length  ==  0: return <BuyNfts />
    if (YourNfts.length === 0) {
        return (
            <div className='buyNfs'> 
                Buy NFTs
            </div>
        )
    }

    const nft = []
    YourNfts.map((NFT) => {
        nft.push({
            "name": NFT.name,
            "id": NFT.token_id,
            "image": NFT.image_original_url,
            "image_id": '',
            "link_image": `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${NFT.permalink}`,
            "link_image_id": ''
        })
    })


    return (
        <div className='YourInfo'>
            <div className='infoContainer'>
                <div className='yourNftList'>
                    {nft.map(NFT => (
                        <div key={NFT.id}>
                            <YourNft
                                nft={NFT}
                                setSelectedNft={setSelectedNft}
                            />
                        </div>
                    )) }
                </div>
            </div>
            <div className='ownerContainer'>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img src={YourNfts[0].owner.profile_img_url} alt='' />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div className='ownerAddress'>{localStorage.getItem('account')}</div> 
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default YourNfts
