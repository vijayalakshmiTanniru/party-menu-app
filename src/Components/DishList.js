import React from "react";
import DishCard from "./DishCard";

function DishList({ dishes, selected, onToggleSelect, onViewIngredients }) {
  if (dishes.length === 0) return <p>No dishes found.</p>;

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selected.includes(dish.id)}
          onToggleSelect={onToggleSelect}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}

export default DishList;
