import React from "react";
import userEvent from "@testing-library/user-event";
import { render, cleanup } from "@testing-library/react";

import {
  PokemonProvider,
  useMutatePokemon,
  CREATE,
  REMOVE,
  usePokemon,
} from "./index";

afterEach(cleanup);

beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
      removeItem: jest.fn(() => null),
    },
    writable: true,
  });
});

const Mutator = () => {
  const { data } = usePokemon();
  const [create, { error: errCreate }] = useMutatePokemon(CREATE);
  const [remove] = useMutatePokemon(REMOVE);
  return (
    <>
      {errCreate && <span data-testid="errMessage">{errCreate}</span>}
      {data ? (
        <div>
          {Object.keys(data).map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      ) : (
        <div>not found</div>
      )}
      <button
        data-testid="addBtn"
        onClick={() => create("ivysaur", { name: "ivysaur" }).catch(() => {})}
      >
        Add Pokemon
      </button>
      <button data-testid="removeBtn" onClick={() => remove("ivysaur")}>
        Remove Pokemon
      </button>
    </>
  );
};

const App = () => {
  return (
    <PokemonProvider>
      <Mutator />
    </PokemonProvider>
  );
};

describe("MyPokemon", () => {
  it("Should show empty message on empty data", () => {
    const { getByText } = render(<App />);
    const el = getByText(/found/i);
    expect(el).toBeInTheDocument();
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it("Should call localStorage getItem on render", () => {
    render(<App />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it("Should call localStorage setItem on add create and show error on duplicate", () => {
    const { getByTestId, getByText } = render(<App />);
    const btn = getByTestId("addBtn");
    expect(btn).toBeInTheDocument();

    userEvent.click(btn);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      "my-pokemon",
      JSON.stringify({
        ivysaur: {
          name: "ivysaur",
        },
      })
    );

    // check existence of data just added
    const pokelist = getByText(/ivysaur/);
    expect(pokelist).toBeInTheDocument();

    // try to remove from pokewallet
    userEvent.click(btn);
    const err = getByTestId("errMessage");
    expect(err).toBeInTheDocument();
  });
});
