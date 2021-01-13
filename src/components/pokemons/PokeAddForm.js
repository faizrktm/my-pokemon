import { useState } from "react";
import { Box, Button, Text, TextInput } from "../commons";
import { CREATE, useMutatePokemon } from "../MyPokemon";

export default function PokeAddForm({ pokemon, onSuccess }) {
  const [name, setName] = useState("");
  const [create, { loading, error }] = useMutatePokemon(CREATE);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await create(name, pokemon);
      onSuccess(result);
    } catch (_) {}
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} data-testid="add-pokemon-form">
      <Box sx={{ mt: 500 }}>
        <Text sx={{ mb: 300 }}>Now enter your {pokemon.name} nickname</Text>
        <TextInput name="name" onChange={handleChange} />
        {error && <Text sx={{ mt: 300, color: "text-error" }}>{error}</Text>}
      </Box>
      <Box>
        <Button
          type="submit"
          loading={loading}
          label="Submit"
          sx={{ mt: 500 }}
        />
      </Box>
    </form>
  );
}
