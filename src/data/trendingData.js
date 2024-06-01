// data/productsData.js
import img1 from "../components/assets/trendingImages/trendingImage1.jpg";
import img2 from "../components/assets/trendingImages/trendingImage2.jpg";
import img3 from "../components/assets/trendingImages/trendingImage3.jpg";
import img4 from "../components/assets/trendingImages/trendingImage4.jpg";

const trendingData = [
  {
    id: 1,
    name: "Gold Necklace",
    description: "Beautiful gold necklace with intricate design.",
    price: 500,
    image: img1,
    category: "gold",
    material: "gold",
    model: "necklace",
  },
  {
    id: 2,
    name: "Wedding band",
    description: "Stunning diamond earrings with a sparkling finish.",
    price: 800,
    image: img2,
    category: "diamond",
    material: "diamond",
    model: "rings",
  },
  {
    id: 3,
    name: "Ear Rings",
    description: "Elegant silver bracelet suitable for any occasion.",
    price: 200,
    image: img3,
    category: "silver",
    material: "silver",
    model: "earring",
  },
  {
    id: 4,
    name: "Pendent",
    price: 200,
    image: img4,
    category: "silver",
    material: "silver",
    model: "fashion",
  },
];
export default trendingData;
