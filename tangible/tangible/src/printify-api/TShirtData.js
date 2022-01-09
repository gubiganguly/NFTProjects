
const TShirtData = (NFT) => {

    const data = {
        "title": NFT.name + ' T-Shirt',
        "print_areas": [
            {
              "variant_ids": [70647, 70648, 70649, 70650, 70651, 70652, 70653, 70654],
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
                        "scale": 0.39878356757179984,
                        "type": "image/jpeg",
                        "x": 0.49764881006166284, 
                        "y": 0.49999804028849115, 
                      }
                  ]
                },
                {
                  "position": "left_sleeve",
                  "images": [
                      {
                        "angle": 0,
                        "height": 150,
                        "width": 150,
                        "id": `${NFT.link_image_id}`, 
                        "name": `${NFT.link_image}`,
                        "scale": 0.11374096182267056,
                        "type": "image/jpeg",
                        "x": 0.5, 
                        "y": 0.5, 
                      }
                  ]
                }
              ]
            }
          ]
    } 

    return data
}

export default TShirtData