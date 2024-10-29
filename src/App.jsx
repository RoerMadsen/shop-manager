import { useState, useEffect } from "react"; //importerer useState og useEffect hooks fra react
import ShopInput from "./Shopinput";
import ShopList from "./Shoplist";
import "./App.css";

function App() {
  //gem data som JSON så det ikke slettes når siden genindlæses ( || laves med option + i, betyder "eller")
  // || [] bruges så vi tager højde for at feltet kan være tomt.
  const storedShopItems = JSON.parse(localStorage.getItem("shopItems")) || [];
  const storedShops = JSON.parse(localStorage.getItem("shops")) || [];

  const [shopItems, setShopItems] = useState(storedShopItems);
  const [shops, setShops] = useState(storedShops);

  //opdaterer localstorage når varer/shopItems ændres. stringify konverterer JS værdi til JSON streng så det kan læses
  useEffect(() => {
    localStorage.setItem("shopItems", JSON.stringify(shopItems));
  }, [shopItems]);

  //opdaterer localstorage når butikker/shops ændres.
  useEffect(() => {
    localStorage.setItem("shops", JSON.stringify(shops));
  }, [shops]);

  return ShopInput();
}

export default App;
