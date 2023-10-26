import React from "react";
import { useState, useEffect, useContext } from "react";

const shareData = React.createContext();

export function DataFromApi( {children} ){
    const [characters, setCharacters] = useState([]);
    
    // let data;
    useEffect(function(){
        fetch('https://thronesapi.com/api/v2/Characters',{
            mode: 'cors',
            'Access-Control-Allow-Origin':'*',
        }).then(res => res.json()).then(data => setCharacters(data));
    },[]);

    console.log(characters);
    return (
        <shareData.Provider value={characters}>
            {children}
        </shareData.Provider>
    )
}

export function useAPI() {
    const context = useContext(shareData);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }