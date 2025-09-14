import React from "react";

function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{dish.name} - Ingredients</h2>
        <ul>
          {dish.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default IngredientModal;
