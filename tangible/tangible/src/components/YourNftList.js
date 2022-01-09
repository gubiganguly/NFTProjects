import React from 'react'
import YourNft from './YourNft'
import './YourNftList.css'
import axios from 'axios'
import{useState, useEffect} from 'react'; 



const YourNfts = ({ yourNfts, setYourNfts, setSelectedNft }) => {

    const [ownerInfo, setOwnerInfo] = useState([])
    
    

    // get user nfts
    useEffect(async () => {



        const data = await axios.get(
            `https://testnets-api.opensea.io/assets?owner=${localStorage.getItem('account')}&order_direction=asc`
            )
        const openSeaNfts = data.data.assets

        // map openSea list to a custom NFT list
        const customNftList = []
        openSeaNfts.map((NFT) => {
            customNftList.push({
                "owner_address": NFT.owner.address,
                "owner_image": NFT.owner.profile_img_url, 
                "name": NFT.name,
                "id": NFT.token_id,
                "image": NFT.image_original_url,
                "image_id": '',
                "link": NFT.permalink,
                "link_image": `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${NFT.permalink}`,
                "link_image_id": ''
            })
        })
        const addressAndImage = []
        addressAndImage.push(customNftList[0].owner_address)
        addressAndImage.push(customNftList[0].owner_image)
        setOwnerInfo(addressAndImage)
        setYourNfts(customNftList)
    }, [localStorage.getItem('account')])


    // if account = 0;  return <Connect Wallet />
    if (localStorage.getItem('account') === 0) {
        return (
            <div className='connectWalet'>
                Connect Wallet
            </div>
        )
    }

    // if YourNfts.length  ==  0: return <BuyNfts />
    if (yourNfts.length === 0) {
        return (
            <div className="buyNfts">
                Buy Nfts
            </div>
        )
    }


    return (
        <div className='YourInfo'>
            <div className='infoContainer'>
                <div className='yourNftList'>
                    {yourNfts.map(NFT => (
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
                    <img src={ownerInfo[1]} alt='' />
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
