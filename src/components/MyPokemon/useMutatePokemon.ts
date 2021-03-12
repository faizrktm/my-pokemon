import * as React from "react";
import { usePokemon } from "./MyPokemon";
import {
  HandleCreate,
  HandleRemove,
  UseMutatePokemon,
  CREATE,
  TypesOption,
} from "./types";

export * from "./types";

export function useMutatePokemon<T extends TypesOption>(
  type: T
): UseMutatePokemon<T> {
  const [status, setStatus] = React.useState<string | null>(null);
  const { create, remove } = usePokemon();
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

  return [
    type === CREATE ? handleCreate : handleRemove,
    { loading: status === "loading", error },
  ] as any;
}
