import * as React from "react";
import { usePokemon } from "./MyPokemon";
import {
  HandleCreate,
  HandleRemove,
  UseCreatePokemon,
  UseDeletePokemon,
} from "./types";

export * from "./types";

export function useCreatePokemon(): UseCreatePokemon {
  const [status, setStatus] = React.useState<string | null>(null);
  const { create } = usePokemon();
  const error = status && status !== "loading" ? status : null;

  const handleCreate: HandleCreate = (name, pokemon) =>
    new Promise((resolve, reject) => {
      try {
        setStatus("loading");
        const result = create(name, pokemon);
        setStatus(null);
        resolve(result);
      } catch (error) {
        setStatus(error.message);
        reject(error);
      }
    });

  return [handleCreate, { loading: status === "loading", error }];
}

export function useDeletePokemon(): UseDeletePokemon {
  const [status, setStatus] = React.useState<string | null>(null);
  const { remove } = usePokemon();
  const error = status && status !== "loading" ? status : null;

  const handleRemove: HandleRemove = (name) =>
    new Promise((resolve, reject) => {
      try {
        setStatus("loading");
        const result = remove(name);
        setStatus(null);
        resolve(result);
      } catch (error) {
        setStatus(error.message);
        reject(error);
      }
    });

  return [handleRemove, { loading: status === "loading", error }];
}
