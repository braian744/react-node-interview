import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: auto;
  border-radius: 10px;
  background-color: lightgray;
  max-width: 300px;
  width: 300px;
  text-align: center;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

const HeroImage = styled.img`
  height: 80px;
  margin: auto;
`;

const Title = styled.h1``;

function Card({ pokemon }) {
  console.log({ pokemon });
  return (
    <Container>
      <HeroImage src={pokemon.img} alt={pokemon.name} />
      <Title>{pokemon.name}</Title>
    </Container>
  );
}

export default Card;
