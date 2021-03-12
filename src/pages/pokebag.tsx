import { Page } from "../components";
import { usePokemon } from "../components/MyPokemon";
import List from "../components/pokemons/List";

export default function PokebagPage() {
  const { dataAsArray } = usePokemon();
  return (
    <Page title="Pokebag">
      <List data={dataAsArray} isPokeBag />
    </Page>
  );
}
