import React, { useEffect, useState } from "react";
import axios from "axios";

import { Header, Section, Container } from "./styles/elements";

import Wilder from "./components/Wilder";
import AddWilder from "./components/AddWilder";

function App() {
  const [wilders, setWilders] = useState([]);

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
    <div>
      <Header>
        <p>App wilders</p>
      </Header>
      <div>
        <Section>
          <Container>
            <AddWilder />
          </Container>
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
        </Section>
      </div>
    </div>
  );
}

export default App;
