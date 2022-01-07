const Hoodie = ( thumbnailImage ) => {
    let hoodie = {
        "sync_product": {
            "name": "Hoodie",
            "thumbnail": `${thumbnailImage}`
        },
        "sync_variants": [
            {
                "retail_price": 50.00,
                "variant_id": 4011,
                "files": [
                    {
                        "url": `${thumbnailImage}`
                    },
                    {
                        "type": "back",
                        "url": `${thumbnailImage}`
                    }
                ]
            },
            {
                "retail_price": 21.00,
                "variant_id": 4012,
                "files": [
                    {
                        "url": `${thumbnailImage}`
                    },
                    {
                        "type": "back",
                        "url": `${thumbnailImage}`
                    }
                ]
            }
        ]
      }
    return hoodie;
}

  export default Hoodie;