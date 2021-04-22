import styled, { keyframes } from "styled-components";
import { colors } from "./variables";

type ItemVotesProps = {
  votes: number;
};

type ButtonProps = {
  showLoading?: boolean;
};

const focus = `
:focus {
    border-color: hsl(${colors.focus.h}, ${colors.focus.s}, ${colors.focus.l});
    box-shadow: 0 0 0 3px
      hsla(
        ${colors.focus.h},
        ${colors.focus.s},
        calc(${colors.focus.l} + 40%),
        0.8
      );
    outline: 3px solid transparent;
  }`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Section = styled.section`
  margin-top: 30px;
`;

export const Header = styled.header`
  text-align: center;
  background-color: ${colors.primary};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Item = styled.li`
  text-align: center;
  list-style: none;
  border: ${colors.primary} solid 1px;
  margin-right: 5px;
  padding: 3px;
  display: flex;
  border-radius: 9999px;
`;

export const ItemVotes = styled.span<ItemVotesProps>`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 5px;

  /* Colors */
  background-color: ${({ votes }) =>
    votes > 9 ? "rgba(0, 100, 0, 0.3)" : "rgba(0, 0, 0, 0.3)"};
  color: #fff;

  /* Rounded border */
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

export const Card = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 200px;
`;

export const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
`;

export const Form = styled.form`
  display: grid;
  place-content: center;
  grid-gap: 0.5rem;
  background-color: #e9f2fd;
  padding: 1rem;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ showLoading }) =>
    showLoading ? "#fff" : colors.primary};
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: inline-block;
  ${focus}
  svg {
    width: 47px !important;
    height: 47px !important;
    animation: ${rotate} 2s linear infinite;
    animation-play-state: running !important;
  }
`;

export const Error = styled.p`
  background-color: red;
`;

export const Success = styled.p`
  background-color: green;
`;
