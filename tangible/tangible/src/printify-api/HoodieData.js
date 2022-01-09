
const HoodieData = (NFT) => {
    
    const data = {
        "title": NFT.name + ' Hoodie',
        "print_areas": [
            {
              "variant_ids": [74644, 74645, 74646, 74647, 74648],
              background: `#66feea`,
              "placeholders": [
                {
                  "position": "front",
                  "images": [
                      {
                        "angle": 0,
                        "height": 1400,
                        "width": 1400,
                        "id": `${NFT.image_id}`, 
                        "name": `${NFT.image}`,
                        "scale": 0.30034062757764685,
                        "type": "image/jpeg",
                        "x": 0.5, 
                        "y": 0.35, 
                      }
                  ]
                },
                {
                  "position": "sleeves",
                  "images": [
                      {
                        "angle": 0,
                        "height": 150,
                        "width": 150,
                        "id": `${NFT.link_image_id}`, 
                        "name": `${NFT.link_image}`,
                        "scale": 0.06052470631220263,
                        "type": "image/jpeg",
                        "x": 0.24772835552751182,
                        "y": 0.20419807618307853
                      },
                      {
                        "angle": 0,
                        "height": 1400,
                        "width": 1400,
                        "id": `${NFT.link_image_id}`, 
                        "name": `${NFT.link_image}`,
                        "scale": 0.06052470631220263,
                        "type": "image/jpeg",
                        "x": 0.7494682967419859, 
                        "y": 0.20251980104510509, 
                      }
                  ]
                }
              ]
            }
          ]
    } 

    return data
}

export default HoodieData