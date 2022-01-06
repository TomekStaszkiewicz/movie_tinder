import React from "react";
import { StoreData, Payload } from "./types";

export const Store = React.createContext<[StoreData, React.Dispatch<Payload>]>([
    { movies: [], currentMovie: null }, () => {}
    ]);
