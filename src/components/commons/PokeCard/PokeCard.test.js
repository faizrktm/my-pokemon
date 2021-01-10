import React from "react";
import { render } from "../../../utils/test-utils";
import PokeCard from "./PokeCard";

describe("PokeCard", () => {
  it("should render <PokeCard /> correctly", () => {
    const { getByAltText, getByText } = render(
      <PokeCard image="https://via.placeholder.com/150" name="bulbasaur" />
    );
    expect(getByText("bulbasaur")).toBeInTheDocument();
    expect(getByAltText("bulbasaur").src).toContain(
      "https://via.placeholder.com/150"
    );
  });
});
