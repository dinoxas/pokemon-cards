import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonsContainer from "./containers/PokemonsContainer";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh"
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <h1 className="heading">Pokemon Cards with GraphQL</h1>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
