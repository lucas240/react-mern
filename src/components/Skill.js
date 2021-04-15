import React from "react";
import Proptypes from "prop-types";
import { Item, ItemVotes } from "../styles/elements";

function Skill(props) {
  const { title, votes } = props;
  return (
    <Item>
      {title}
      <ItemVotes>{votes}</ItemVotes>
    </Item>
  );
}

Skill.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
