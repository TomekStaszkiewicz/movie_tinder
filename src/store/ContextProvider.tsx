import {useReducer, useEffect} from "react";
import { ActionTypes } from ".";
import { InitializeStore } from "./InitializeStore";
import { initialData, MovieReducer } from "./Movie";
import {Store} from './StoreContext';

export const StoreProvider: WithChildren = ({children}) => {
    const [storeData, dispatch] = useReducer(MovieReducer, initialData);
    useEffect(() => {
       const onInit = async () => {
           const data = await InitializeStore();
           dispatch({type: ActionTypes.INIT, data});
       }
       onInit();
    }, [])
    return (
    <Store.Provider value={[storeData, dispatch]}>
        {children}
    </Store.Provider>
);
}