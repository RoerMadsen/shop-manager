import { useState } from "react";
import ShopList from "./Shoplist";
//Tilgængelighed -> tilføjet synlige labels til input felter og aria-labels til select + fieldset og legend
// tilgængelighedstestere: https://qualweb.di.fc.ul.pt/evaluator/ og https://wave.webaim.org/

//Denne fil bruges til at tilføje varer og butikker. Brugeren kan indtaste en vare, vælge afdeling og butik.
function ShopInput({ addShopItem, addShop, shops }) {
  const [inputValue, setInputValue] = useState(""); //vare
  const [priority, setPriority] = useState(""); //priority henviser til afdelinger
  const [shopName, setShopName] = useState(""); //butik
  const [selectedShop, setSelectedShop] = useState(""); //tilknytter butik til varen

  //håndterer data fra "tilføj butik"
  const handleShopSubmit = (e) => {
    e.preventDefault();
    if (shopName.trim()) {
      addShop(shopName);
      setShopName("");
    }
  };
  //håndterer data fra "tilføj vare"
  const handleSubmit = (e) => {
    e.preventDefault(); //hvis man ikke har preventDefuault genindlæses siden når man trykker submit
    if (inputValue.trim() && priority && selectedShop) {
      addShopItem(inputValue, priority, selectedShop);
      setInputValue("");
      setPriority("");
      setSelectedShop("");
    }
  };
  return (
    //Tilføj ny butik + tilføj ny vare
    // i onChange er e er bare en parameter, det kan hedde noget andet
    <>
      <form onSubmit={handleShopSubmit}>
        <fieldset>
          <legend>Tilføj Butik</legend>
          <label htmlFor="shopName">Tilføj Ny Butik</label>
          <input
            type="text"
            id="shopName"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="Tilføj ny butik"
          />
          <button type="submit">Tilføj Butik</button>
        </fieldset>
      </form>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Tilføj Vare Til Indkøbsliste</legend>
          <label htmlFor="inputValue">Tilføj Ny Vare</label>
          <input
            type="text"
            id="inputValue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Tilføj Ny vare"
          />
          {/*Valg af afdeling*/}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
            aria-label="Vælg Afdeling">
            <option value="" disabled hidden>
              Vælg afdeling
            </option>
            <option value="frugt/grønt" aria-label="Frugt og Grønt">
              Frugt/Grønt
            </option>
            <option value="brød" aria-label="Brød">
              Brød
            </option>
            <option value="kød" aria-label="Kød">
              Kød
            </option>
            <option value="konserves" aria-label="Konserves">
              Konserves
            </option>
            <option value="nonfood" aria-label="NonFood">
              NonFood
            </option>
            <option value="mejeri" aria-label="Mejeri">
              Mejeri
            </option>
            <option value="frost" aria-label="Mejeri">
              Frost
            </option>
          </select>
          {/** valg af butik */}
          <select
            value={selectedShop}
            onChange={(e) => setSelectedShop(e.target.value)}
            required
            aria-label="Vælg Butik">
            <option value="" disabled hidden>
              Vælg Butik
            </option>
            {shops.map((shop, index) => (
              <option key={index} value={shop} aria-label={shop}>
                {shop}
              </option>
            ))}
          </select>
          <button type="submit">Vælg butik</button>
        </fieldset>
      </form>
    </>
  );
}

export default ShopInput;
