import { createContext , useContext } from 'react'


export const DataContext = createContext({
   index:[],
   setindex:() => {},
   addToWatchlist:[],
   setaddtowatchlist:() => {}
})

export const DataProvider = DataContext.Provider;

export default function useDataContext(){
    return useContext(DataContext)
}