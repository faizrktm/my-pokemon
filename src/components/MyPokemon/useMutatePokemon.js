import * as React from "react";
import { usePokemon } from "./MyPokemon";

export const CREATE = "CREATE_POKEMON";
export const REMOVE = "REMOVE_POKEMON";

export const useMutatePokemon = (type) => {
  const [status, setStatus] = React.useState(null);
  const { create, remove } = usePokemon();
  const error = status && status !== "loading" ? status : null;

  const handleCreate = (...args) =>
    new Promise((resolve, reject) => {
      try {
        setStatus("loading");
        const result = create(...args);
        setStatus(null);
        resolve(result);
      } catch (error) {
        setStatus(error.message);
        reject(error);
      }
    });

  const handleRemove = (...args) =>
    new Promise((resolve, reject) => {
      try {
        setStatus("loading");
        const result = remove(...args);
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
  ];
};
