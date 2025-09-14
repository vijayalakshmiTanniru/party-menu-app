import React, { useState } from "react";
import DishList from "./components/DishList";
import Filters from "./components/Filters";
import IngredientModal from "./components/IngredientModal";
import DISHES from "./data/mockDishes";
import "./App.css";

function App() {
  const tabs = ["Starter", "Main Course", "Dessert", "Sides"];
  const [activeTab, setActiveTab] = useState("Starter");
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [filterVeg, setFilterVeg] = useState(null);
  const [modalDish, setModalDish] = useState(null);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const filteredDishes = DISHES.filter(
    (d) =>
      d.type === activeTab &&
      d.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterVeg === null || d.isVeg === filterVeg)
  );

  return (
    <div>
      <h1>Party Menu App</h1>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab} ({selected.filter((id) => DISHES.find((d) => d.id === id)?.type === tab).length})
          </button>
        ))}
      </div>

      {/* Filters */}
      <Filters
        search={search}
        setSearch={setSearch}
        filterVeg={filterVeg}
        setFilterVeg={setFilterVeg}
      />

      {/* Dish List */}
      <DishList
        dishes={filteredDishes}
        selected={selected}
        onToggleSelect={toggleSelect}
        onViewIngredients={(dish) => setModalDish(dish)}
      />

      {/* Ingredient Modal */}
      <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />

      {/* Summary */}
      <div style={{ marginTop: "20px" }}>
        <h3>Total Selected: {selected.length}</h3>
        <button disabled={selected.length === 0}>Continue</button>
      </div>
    </div>
  );
}

export default App;
