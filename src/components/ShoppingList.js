import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  // const [formData, setFormData] = useState({
  //   name: "", 
  //   category: "Produce",
  // })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  // function handleChange(e) {
  //   const name = e.target.name
  //   const value = e.target.value
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  // }

  function onItemFormSubmit(newItem) {
    addItems(newItem)
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true && item.name.includes(search);

    return item.category === selectedCategory && item.name.includes(search);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchChange} search={search} selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
