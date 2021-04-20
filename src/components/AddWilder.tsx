import React, { useState } from "react";
import axios from "axios";

import { Form, Button, Error } from "../styles/elements";

function AddWilder() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [delayed, setDelayed] = useState(false);
  const [input, setInput] = useState({
    name: "",
    city: "",
  });
  const { name, city } = input;

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      setDelayed(true);
      setLoading(true);
      setTimeout(() => setDelayed(false), 1000);
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}`,
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
    <div>
      <h3>Add wilders</h3>
      <Form onSubmit={(evt) => handleSubmit(evt)}>
        <input
          placeholder="Paul"
          name="name"
          value={name}
          onChange={(evt) => handleInputChange(evt)}
        />
        <input
          placeholder="Nice"
          name="city"
          value={city}
          onChange={(evt) => handleInputChange(evt)}
        />
        {error !== "" && <Error>{error}</Error>}
        <Button disabled={loading} showLoading={loading && !delayed}>
          {loading && !delayed ? <img alt="loading" /> : "Add"}
        </Button>
      </Form>
    </div>
  );
}

export default AddWilder;
