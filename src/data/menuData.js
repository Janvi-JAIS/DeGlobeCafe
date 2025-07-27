import HazelnutCoffee from "../assets/HazelnutColdCoffee.png";
import Tea from "../assets/Tea.png"
import Sandwich from "../assets/Sandwich.png.png"
const menuData = [
  {
    id: 1,
    name: "Hazelnut Cold Coffee",
    description: "Chilled espresso blended with hazelnut flavor and cream.",
    price: "₹199",
    category: "Beverages",
    bestSeller: true,
    image: HazelnutCoffee,
  },
  {
    id: 2,
    name: "Masala Tea",
    description: "Traditional Indian tea infused with spices.",
    price: "₹99",
    category: "Tea",
    bestSeller: false,
    image: Tea,
  },
  {
    id: 3,
    name: "Club Sandwich",
    description: "Grilled sandwich loaded with veggies and cheese.",
    price: "₹149",
    category: "Sandwiches",
    bestSeller: true,
    image: Sandwich,
  },
]

export default menuData
