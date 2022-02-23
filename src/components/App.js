import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import items from "../data/items";

function App() {

  const [isDarkMode , setIsDarkMode] = useState(false);
  function handleDarkModeClick(){
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>{isDarkMode ? "Dark" : "Light"} Mode </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
