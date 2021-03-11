import { Pokemon } from "../../query";

export const CREATE = "CREATE_POKEMON";

export const REMOVE = "REMOVE_POKEMON";

export type CreateType = "CREATE_POKEMON";

export type RemoveType = "REMOVE_POKEMON";

export type TypesOption = "CREATE_POKEMON" | "REMOVE_POKEMON";

export type HandleCreate = (name: string, pokemon: Pokemon) => Promise<any>;

export type HandleRemove = (name: string) => Promise<any>;

export type UseMutatePokemon<T extends CreateType | RemoveType> = [
  T extends CreateType ? HandleCreate : HandleRemove,
  MutateState
];

export interface MutateState {
  loading: boolean;
  error: string | null;
}
