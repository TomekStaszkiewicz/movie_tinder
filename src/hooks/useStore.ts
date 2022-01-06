import React from "react";
import { Store } from "../store/StoreContext";

export const useStore = () => React.useContext(Store);
