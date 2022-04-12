import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  
  const [formData, setFormData] = useState({
    name: "", 
    category: "Produce",
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: uuid(),
    }
    
    onItemFormSubmit(newItem)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input value={formData.name} type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select value={formData.category} name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
