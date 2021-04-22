import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import {
  Header,
  Section,
  Container,
  Button,
  CardRow,
  Success,
} from "./styles/elements";

import Wilder from "./components/Wilder";
import AddWilder from "./components/AddWilder";
import { SkillsProps } from "./components/Skill";

export type WilderProps = {
  _id?: number;
  name: string;
  city: string;
  skills: SkillsProps[];
};

function App() {
  const [wilders, setWilders] = useState<WilderProps[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const fetchWilders = async () => {
    try {
      const result = await axios(`${process.env.REACT_APP_API_URL}`);
      console.log(result);
      setWilders(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
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
          <Container>
            {showForm ? (
              <AddWilder
                onSuccess={(message: string) => {
                  setShowForm(false);
                  setSuccessMessage(message);
                }}
              />
            ) : (
              successMessage !== "" && <Success>{successMessage}</Success>
            )}
          </Container>
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
