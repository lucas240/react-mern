import React from "react";
import Proptypes from "prop-types";
import { List, Card } from "../styles/elements";

import Skill from "./Skill";

function Wilder(props) {
  const { name, city, skills } = props;

  return (
    <Card>
      <p>Nom: {name}</p>
      <p>Ville: {city}</p>
      <div>
        <List>
          {skills.map((elt) => (
            <Skill title={elt.title} votes={elt.votes} />
          ))}
        </List>
      </div>
    </Card>
  );
}

Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  skills: Proptypes.array.isRequired,
};

export default Wilder;
