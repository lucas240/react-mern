import React, { useState } from "react";

function AddWilder() {
  const [input, setInput] = useState({
    name: "",
    city: "",
  });
  const { name, city } = input;

  const handleInputChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("success");
  };

  return (
    <div>
      <h3>Add wilders</h3>
      <div>
        <input
          placeholder="Dossier Mr Paul"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          placeholder="Valentin, Clément, Jessica..."
          name="city"
          value={city}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button handleClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}

export default AddWilder;
