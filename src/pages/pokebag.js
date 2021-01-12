import { Page } from "../components";
import { usePokemon } from "../components/MyPokemon";
import List from "../components/pokemons/List";

export default function PokebagPage() {
  const { data } = usePokemon();
  return (
    <Page title="Pokebag">
      <List data={data} isPokeBag />
    </Page>
  );
}
