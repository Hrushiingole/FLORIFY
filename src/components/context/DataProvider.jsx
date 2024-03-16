import { createContext, useState } from "react";


export const DataContext=createContext(null);


const DataProvider =({children})=>{
    const [item,setItem]=useState([]);
    
    return(
        <DataContext.Provider value={{
                item,
                setItem
        }
        }>
            {children}
        </DataContext.Provider>


    )
}
export default DataProvider;