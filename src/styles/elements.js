import styled from "styled-components";
import { colors } from "./variables";

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

export const ItemVotes = styled.span`
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
  margin-right: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const List = styled.ul`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: ${({ showLoading }) =>
    showLoading ? "#fff" : colors.primary};
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;
  display: inline-block;
`;

export const Error = styled.span`
  color: red;
`;
