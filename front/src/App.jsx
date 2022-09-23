import React, { useEffect, useState } from "react";
import { api } from "./api";
import Card from "./components/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 100px;
  margin: 10px;
  padding: 10px;
  text-aling: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await api.get("/pokemons?page=" + page + "&per_page=3");
      setPokemons(data.result);
      setPage(+data.page);
      setCount(+data.total_pages);
    };
    console.log({ page, count });
    fetchPokemons();
  }, [page]);

  const navigateToNext = () => {
    console.log("page from next", page, count);
    setPage((prev) => (prev < count ? +prev + 1 : +prev));
  };
  const navigateToPrev = () => {
    console.log("page from prev", page);
    setPage((prev) => (prev > 1 ? +prev - 1 : +prev));
  };
  return (
    <div className="App">
      <Container>
        {pokemons.length > 0 &&
          pokemons.map((poke, index) => {
            return <Card pokemon={poke} key={poke.name + index}></Card>;
          })}
      </Container>

      <ButtonContainer>
        <Button onClick={() => navigateToPrev()}>&laquo; Previous</Button>
        <Button onClick={() => navigateToNext()}>Next &raquo;</Button>
      </ButtonContainer>
    </div>
  );
}

export default App;
