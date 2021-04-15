import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container, Header } from "./styles/elements";

import Wilder from "./components/Wilder";

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilder/read");
        console.log(result);
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, []);

  return (
    <div>
      <Header>
        <p>App wilders</p>
      </Header>
      <Container>
        {wilders.map((elt) => (
          <Wilder
            key={elt._id}
            name={elt.name}
            city={elt.city}
            skills={elt.skills}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
