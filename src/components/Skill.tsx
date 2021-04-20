import React from "react";
import Proptypes from "prop-types";
import { Item, ItemVotes } from "../styles/elements";

export type SkillsProps = {
  title: string;
  votes: number;
};

function Skill(props: SkillsProps) {
  const { title, votes } = props;
  return (
    <Item>
      {title}
      <ItemVotes votes={votes}>{votes}</ItemVotes>
    </Item>
  );
}

Skill.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
