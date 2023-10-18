
import { useState, useEffect } from "react";
import {  useAPI } from "../context/dataFromApi";

export default function Character(){
    const [printCharacter, updateCharacter] = useState();
    
    
    const data = useAPI();

    const path = window.location.pathname;
    const pathArr = path.split('/');


    let [character] = data.filter(character=>{
        const url = character.url.split('/');
        if(url[5]===pathArr[2]) return (character);
        return 0;
    });
    
    /*eslint-disable*/
    useEffect(()=>{
        updateCharacter(character);
    },[data]);
    /*eslint-enable*/


    // const printCharacter = character.map(character =>{
    //     return character.name;   
    // })

    return <>
        <div>
            <h1>Welcome {printCharacter && printCharacter.name }</h1>
        </div>
    </>
}