const { default: DrawerPanel } = require("antd/es/drawer/DrawerPanel");
const axios = require("axios");
const data =

[
    {
        "title": "Seeds of Change Organic Quinoa, Brown",
        "slug": "seeds-of-change-organic-quinoe",
        "moreLove": true,
        "id": "1",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-1-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-1-1.jpg"
            }
        ],
        "condition": "new",
        "vendor": "nestFood",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "broccoli",
        "sizes": "s",
        "stock": 0,
        "review": 10,
        "rating": 3,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "All Natural Italian-Style Chicken Meatballs",
        "slug": "all-natural-italian-style-chicken-meatballs",
        "moreLove": true,
        "id": "2",
        "price": 78,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-2-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-2-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-2-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-2-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-2-1.jpg"
            }
        ],
        "condition": "refurbished",
        "vendor": "stouffer",
        "color": "blue",
        "brand": "armani",
        "category": "jeans",
        "featured": true,
        "trending": false,
        "discount": {
            "banner": "/assets/imgs/banner/banner-6.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": false
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "broccoli",
        "sizes": "s",
        "review": 10,
        "rating": 4,
        "ratingScore": 90,
        "created": "2021-02-03T06:48:07"
    },
    {
        "title": "Angie’s Boomchickapop Sweet & Salty",
        "slug": "angie’s-boomchickapop-sweet-&-salty",
        "moreLove": true,
        "id": "3",
        "price": 35,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-3-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-3-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-3-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-3-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-3-1.jpg"
            }
        ],
        "condition": "new",
        "vendor": "starKist",
        "color": "blue",
        "brand": "armani",
        "category": "accessories",
        "featured": true,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-7.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": false
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "fruit",
        "sizes": "s",
        "review": 10,
        "rating": 5,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Foster Farms Takeout Crispy Classic",
        "slug": "foster-farms-takeout-crispy-classic",
        "moreLove": true,
        "id": "4",
        "price": 55,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-4-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-4-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-4-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-4-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-4-1.jpg"
            }
        ],
        "condition": "used",
        "vendor": "NestFood",
        "color": "blue",
        "brand": "armani",
        "category": "trousers",
        "featured": true,
        "trending": false,
        "discount": {
            "banner": "/assets/imgs/banner/banner-6.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "salad",
        "sizes": "s",
        "review": 10,
        "rating": 4,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Green Diamond Almonds Lightly From Oska",
        "slug": "green-diamond-almonds-lightly-from-oska-japan",
        "moreLove": true,
        "id": "5",
        "price": 110,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-5-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-5-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-5-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-5-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-5-1.jpg"
            }
        ],
        "condition": "refurbished",
        "vendor": "NestFood",
        "color": "red",
        "brand": "NestFood",
        "category": "shoe",
        "featured": true,
        "trending": false,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": false
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "fruit",
        "sizes": "s",
        "review": 10,
        "rating": 5,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Chobani Complete Vanilla Greek Yogurt",
        "slug": "chobani-complete-vanilla-greek-yogurt",
        "moreLove": true,
        "id": "6",
        "price": 150,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-6-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-6-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-6-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-6-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-6-2.jpg"
            }
        ],
        "condition": "refurbished",
        "vendor": "NestFood",
        "color": "green",
        "brand": "helix",
        "category": "jeans",
        "featured": true,
        "trending": false,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": false
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "salad",
        "sizes": "s",
        "review": 10,
        "rating": 3,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Canada Dry Ginger Ale – 2 L Bottle",
        "slug": "canada-dry-ginger-ale-–-2-l-bottle",
        "moreLove": true,
        "id": "7",
        "price": 98,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-7-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-7-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-7-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-7-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-7-1.jpg"
            }
        ],
        "condition": "new",
        "vendor": "stouffer",
        "color": "blue",
        "brand": "armani",
        "category": "trousers",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": false
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "fruit",
        "sizes": "s",
        "review": 10,
        "rating": 2,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Encore Seafoods Stuffed Alaskan",
        "slug": "encore-seafoods-stuffed-alaskan",
        "moreLove": true,
        "id": "8",
        "price": 24,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-8-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-8-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-8-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-8-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-8-1.jpg"
            }
        ],
        "condition": "refurbished",
        "vendor": "NestFood",
        "color": "blue",
        "brand": "armani",
        "category": "shoe",
        "featured": true,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": false
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "milk",
        "sizes": "s",
        "review": 10,
        "rating": 1,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Gorton’s Beer Battered Fish Fillets",
        "slug": "gorton’s-beer-battered-fish-fillets",
        "moreLove": true,
        "id": "9",
        "price": 146,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-9-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-9-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-9-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-9-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-9-1.jpg"
            }
        ],
        "condition": "new",
        "vendor": "stouffer",
        "color": "blue",
        "brand": "armani",
        "category": "accessories",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": false
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "milk",
        "sizes": "s",
        "review": 10,
        "rating": 4,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Haagen-Dazs Caramel Cone Ice Cream",
        "slug": "haagen-dazs-caramel-cone-ice-cream",
        "moreLove": true,
        "id": "10",
        "price": 67,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-10-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-10-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-10-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-10-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-10-1.jpg"
            }
        ],
        "condition": "used",
        "vendor": "Burbe",
        "color": "blue",
        "brand": "armani",
        "category": "jacket",
        "featured": true,
        "trending": false,
        "discount": {
            "banner": "/assets/imgs/banner/banner-8.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "appetizer",
        "sizes": "s",
        "review": 10,
        "rating": 4,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Hamitoki - Seeds of Change Organic Quinoe",
        "slug": "seeds-of-change-organic-quinoe",
        "moreLove": true,
        "id": "11",
        "price": 116,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-11-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-11-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-11-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-11-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-11-1.jpg"
            }
        ],
        "condition": "refurbished",
        "vendor": "NestFood",
        "color": "red",
        "brand": "NestFood",
        "category": "jacket",
        "featured": true,
        "trending": false,
        "discount": {
            "banner": "/assets/imgs/banner/banner-8.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "milk",
        "sizes": "s",
        "review": 10,
        "rating": 4,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "All Natural Italian-Style Chicken Meatballs",
        "slug": "all-natural-italian-style-chicken-meatballs",
        "moreLove": true,
        "id": "12",
        "price": 73,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-12-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-12-2.jpg"
            }
        ],
        "totalSell": 1227,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-12-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-12-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-12-1.jpg"
            }
        ],
        "condition": "refurbished",
        "vendor": "adidas",
        "color": "green",
        "brand": "helix",
        "category": "jeans",
        "featured": true,
        "trending": false,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 4,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "milk",
        "sizes": "s",
        "review": 10,
        "rating": 4,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Angie’s Boomchickapop Sweet & Salty",
        "slug": "angie’s-boomchickapop-sweet-&-salty",
        "moreLove": true,
        "id": "13",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-13-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-13-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-13-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-13-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-13-1.jpg"
            }
        ],
        "condition": "new",
        "vendor": "iSnack",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "appetizer",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 4,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Foster Farms Takeout Crispy Classic",
        "slug": "foster-farms-takeout-crispy-classic",
        "moreLove": true,
        "id": "14",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-14-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-14-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-14-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-14-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-14-1.jpg"
            }
        ],
        "condition": "new",
        "vendor": "stouffer",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "appetizer",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 3,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Blue Diamond Almonds Lightly Salted Vegetables",
        "slug": "blue-diamond-almonds-lightly",
        "moreLove": true,
        "id": "15",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-15-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-15-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-15-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-15-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-15-1.jpg"
            }
        ],
        "condition": "new",
        "vendor": "Harris",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "snack",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 3,
        "ratingScore": 90,
        "created": ""
    },
    {
        "title": "Helen Tokio Chobani Complete Vanilla Greek",
        "slug": "helen-tokio-chobani-complete-vanilla-greek",
        "moreLove": true,
        "id": "16",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-1-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-16-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-3.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-4.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-5.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-6.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-7.jpg"
            }
        ],
        "condition": "new",
        "vendor": "Costco",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "snack",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 3,
        "ratingScore": 50,
        "created": ""
    },
    {
        "title": "Canada Dry Ginger Ale – 2 L Bottle",
        "slug": "canada-dry-ginger-ale-–-2-l-bottle",
        "moreLove": true,
        "id": "17",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-1-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-16-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-3.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-4.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-5.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-6.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-7.jpg"
            }
        ],
        "condition": "new",
        "vendor": "Costco",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "snack",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 3,
        "ratingScore": 50,
        "created": ""
    },
    {
        "title": "Encore Seafoods Stuffed Alaskan",
        "slug": "encore-seafoods-stuffed-alaskan",
        "moreLove": true,
        "id": "18",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-1-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-16-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-3.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-4.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-5.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-6.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-7.jpg"
            }
        ],
        "condition": "new",
        "vendor": "stouffer",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "snack",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 3,
        "ratingScore": 50,
        "created": ""
    },
    {
        "title": "Gorton’s Beer Battered Fish Fillets",
        "slug": "gorton’s-beer-battered-fish-fillets",
        "moreLove": true,
        "id": "19",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-1-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-16-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-3.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-4.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-5.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-6.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-7.jpg"
            }
        ],
        "condition": "new",
        "vendor": "stouffer",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "snack",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 3,
        "ratingScore": 50,
        "created": ""
    },
    {
        "title": "Haagen-Dazs Caramel Cone Ice Cream",
        "slug": "haagen-dazs-caramel-cone-ice-cream",
        "moreLove": true,
        "id": "20",
        "price": 238.85,
        "oldPrice": 245.8,
        "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        "images": [
            {
                "img": "/assets/imgs/shop/product-1-1.jpg"
            },
            {
                "img": "/assets/imgs/shop/product-1-2.jpg"
            }
        ],
        "totalSell": 27,
        "gallery": [
            {
                "thumb": "/assets/imgs/shop/product-16-1.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-2.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-3.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-4.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-5.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-6.jpg"
            },
            {
                "thumb": "/assets/imgs/shop/product-16-7.jpg"
            }
        ],
        "condition": "new",
        "vendor": "stouffer",
        "color": "blue",
        "brand": "armani",
        "category": "clothing",
        "featured": false,
        "trending": true,
        "discount": {
            "banner": "/assets/imgs/banner/banner-5.png",
            "percentage": 14,
            "expireDate": null,
            "isActive": true
        },
        "variations": [
            "red",
            "yellow",
            "white",
            "orange",
            "cyan",
            "green",
            "purple"
        ],
        "weight": 150,
        "tags": "snack",
        "sizes": "s",
        "stock": 8,
        "review": 10,
        "rating": 3,
        "ratingScore": 50,
        "created": ""
    }
]




// data.forEach(async (e)=>{
//    const {data:response} = await axios.post("http://localhost:8000/products/create",
//    timeout:1000,
//    he
//    )
// })