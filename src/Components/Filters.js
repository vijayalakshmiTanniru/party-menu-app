import React from "react";

function Filters({ search, setSearch, filterVeg, setFilterVeg }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={filterVeg === true}
            onChange={() =>
              setFilterVeg(filterVeg === true ? null : true)
            }
          />
          Veg
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterVeg === false}
            onChange={() =>
              setFilterVeg(filterVeg === false ? null : false)
            }
          />
          Non-Veg
        </label>
      </div>
    </div>
  );
}

export default Filters;
