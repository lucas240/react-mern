import React, { useState } from "react";
import axios from "axios";

import { Card, Form, Button, Error } from "../styles/elements";

function AddWilder() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setLoading(true);
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}create`,
        input
      );
      console.log(result);
      if (result.data.success) {
        setError("");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <h3>Add wilders</h3>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Paul"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          placeholder="Nice"
          name="city"
          value={city}
          onChange={handleInputChange}
        />
      </Form>
      {error !== "" && <Error>{error}</Error>}
      <div>
        <Button onClick={handleSubmit}>
          {loading ? <img alt="loading" /> : "Add"}
        </Button>
      </div>
    </Card>
  );
}

export default AddWilder;
