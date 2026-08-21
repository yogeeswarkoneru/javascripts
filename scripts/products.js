export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export const products = [
  {
    id: "1",
    image: "images/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Grey Athletic Cotton Socks 6 Pairs",
    rating: {
      stars: "images/rating-4.png",
      rated: "87",
    },
    costCents: 1599,
  },
  {
    id: "2",
    image: "images/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: "images/rating-45.png",
      rated: "50",
    },
    costCents: 2399,
  },
  {
    id: "3",
    image: "images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: " Adults Plain Cotton T-Shirt 2-Pack Teal",
    rating: {
      stars: "images/rating-45.png",
      rated: "140",
    },
    costCents: 1099,
  },
  {
    id: "4",
    image: "images/6-piece-white-dinner-plate-set.jpg",
    name: "6-Piece White Dinner Plate Set",
    rating: {
      stars: "images/rating-45.png",
      rated: "455",
    },
    costCents: 2499,
  },
  {
    id: "5",
    image: "images/black-2-slot-toaster.jpg",
    name: "Black 2-Slot Toaster",
    rating: {
      stars: "images/rating-4.png",
      rated: "299",
    },
    costCents: 7999,
  },
  {
    id: "6",
    image: "images/knit-athletic-sneakers-gray.jpg",
    name: "Knit Athletic Sneakers - Gray",
    rating: {
      stars: "images/rating-4.png",
      rated: "2367",
    },
    costCents: 4999,
  },
  {
    id: "7",
    image: "images/luxury-tower-set-6-piece.jpg",
    name: "Luxury Tower Set Combo",
    rating: {
      stars: "images/rating-45.png",
      rated: "299",
    },
    costCents: 9999,
  },
  {
    id: "8",
    image: "images/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: " Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: "images/rating-45.png",
      rated: "235",
    },
    costCents: 3999,
  },
  {
    id: "9",
    image: "images/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "999",
    },
    costCents: 6599,
  },
  {
    id: "10",
    image: "images/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "235",
    },
    costCents: 5999,
  },
  {
    id: "11",
    image: "images/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: "images/rating-4.png",
      rated: "567",
    },
    costCents: 10000,
  },
  {
    id: "12",
    image: "images/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Bottle",
    rating: {
      stars: "images/rating-45.png",
      rated: "567",
    },
    costCents: 9500,
  },
  {
    id: "13",
    image: "images/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "867",
    },
    costCents: 2000,
  },
  {
    id: "14",
    image: "images/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: "images/rating-45.png",
      rated: "98",
    },
    costCents: 1610,
  },
  {
    id: "15",
    image: "images/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "769",
    },
    costCents: 5999,
  },
  {
    id: "16",
    image: "images/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: "images/rating-4.png",
      rated: "865",
    },
    costCents: 2200,
  },
  {
    id: "17",
    image: "images/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: "images/rating-45.png",
      rated: "459",
    },
    costCents: 2010,
  },
  {
    id: "18",
    image: "images/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: "images/rating-45.png",
      rated: "90",
    },
    costCents: 1674,
  },
  {
    id: "19",
    image: "images/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch",
    rating: {
      stars: "images/rating-4.png",
      rated: "78",
    },
    costCents: 1450,
  },
  {
    id: "20",
    image: "images/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: "images/rating-45.png",
      rated: "786",
    },
    costCents: 1820,
  },
  {
    id: "21",
    image: "images/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: "images/rating-45.png",
      rated: "568",
    },
    costCents: 1209,
  },
  {
    id: "22",
    image: "images/trash-can-with-foot-pedal-50-liter.jpg",
    name: " Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: "images/rating-45.png",
      rated: "168",
    },
    costCents: 8300,
  },
  {
    id: "23",
    image: "images/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: "images/rating-4.png",
      rated: "420",
    },
    costCents: 2640,
  },
  {
    id: "24",
    image: "images/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "786",
    },
    costCents: 1460,
  },
  {
    id: "25",
    image: "images/coffeemaker-with-glass-carafe-black.jpg",
    name: " Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: "images/rating-45.png",
      rated: "78",
    },
    costCents: 2298,
  },
  {
    id: "26",
    image: "images/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "4089",
    },
    costCents: 2390,
  },
  {
    id: "27",
    image: "images/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "870",
    },
    costCents: 1690,
  },
  {
    id: "28",
    image: "images/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: "images/rating-4.png",
      rated: "486",
    },
    costCents: 1649,
  },
  {
    id: "29",
    image: "images/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "1046",
    },
    costCents: 1900,
  },
  {
    id: "30",
    image: "images/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: "images/rating-45.png",
      rated: "789",
    },
    costCents: 2090,
  },
  {
    id: "31",
    image: "images/cotton-bath-towels-teal.webp",
    name: " 100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: "images/rating-45.png",
      rated: "786",
    },
    costCents: 2100,
  },
  {
    id: "32",
    image: "images/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: "images/rating-45.png",
      rated: "56",
    },
    costCents: 11100,
  },
  {
    id: "33",
    image: "images/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: "images/rating-5 (1).png",
      rated: "500",
    },
    costCents: 3899,
  },
  {
    id: "34",
    image: "images/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: "images/rating-45.png",
      rated: "1045",
    },
    costCents: 4990,
  },
  {
    id: "35",
    image: "images/knit-athletic-sneakers-pink.webp",
    name: " Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: "images/rating-45.png",
      rated: "99",
    },
    costCents: 3899,
  },
  {
    id: "36",
    image: "images/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: "images/rating-45.png",
      rated: "78",
    },
    costCents: 4509,
  },
];
