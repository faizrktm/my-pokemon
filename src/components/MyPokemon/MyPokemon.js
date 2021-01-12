import * as React from "react";

const PokemonContext = React.createContext();

const storageKey = "my-pokemon";

export function PokemonProvider({ children }) {
  const [data, setData] = React.useState(() => {
    const pokemons = localStorage.getItem(storageKey);
    return pokemons !== null ? JSON.parse(pokemons) : null;
  });

  const create = (nickname, pokemon) => {
    if (!nickname || !pokemon) {
      throw new Error("Nickname required");
    }
    if (data?.[nickname]) {
      throw new Error("Nickname already exist, use different name");
    }
    const toBeSaved = { [nickname]: pokemon, ...(data || {}) };
    localStorage.setItem(storageKey, JSON.stringify(toBeSaved));
    setData(toBeSaved);
    return true;
  };

  const remove = (nickname) => {
    const toBeSaved = { ...data };
    if (!nickname || !toBeSaved[nickname]) {
      throw new Error("Pokemon not found");
    }
    delete toBeSaved[nickname];
    if (!Object.keys(toBeSaved).length) {
      localStorage.removeItem(storageKey);
      setData(null);
    } else {
      localStorage.setItem(storageKey, JSON.stringify(toBeSaved));
      setData(toBeSaved);
    }
  };

  return (
    <PokemonContext.Provider value={{ data, create, remove }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => {
  const state = React.useContext(PokemonContext);
  return state;
};
