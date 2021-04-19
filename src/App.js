import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { Header, Section, Container, Button, CardRow } from "./styles/elements";

import Wilder from "./components/Wilder";
import AddWilder from "./components/AddWilder";

function App() {
  const [wilders, setWilders] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios(`${process.env.REACT_APP_API_URL}read`);
        console.log(result);
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWilders();
  }, []);

  return (
    <div className="app">
      <Header>
        <p>App wilders</p>
      </Header>
      <div>
        <Section>
          <Container>
            <Button onClick={() => setShowForm(!showForm)}>
              {showForm ? "Close form" : "Open form"}
            </Button>
          </Container>
          <Container>{showForm ? <AddWilder /> : <></>}</Container>
          <CardRow>
            {wilders.map((elt) => (
              <Wilder
                key={elt._id}
                name={elt.name}
                city={elt.city}
                skills={elt.skills}
              />
            ))}
          </CardRow>
        </Section>
      </div>
    </div>
  );
}

export default App;
