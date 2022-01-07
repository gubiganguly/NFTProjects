import React from 'react'
import YourNft from './YourNft'
import './YourNftList.css'
import axios from 'axios'


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

      
    return (
        <div className='YourInfo'>
            <div className='infoContainer'>
                <div className='yourNftList'>
                    {YourNfts.map(NFT => (
                        <div key={NFT.id}>
                            <YourNft
                                id={NFT.token_id}
                                name={NFT.name}
                                image={NFT.image_original_url}
                                link={NFT.permalink}
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
