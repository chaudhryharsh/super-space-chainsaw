
import { useState, useEffect } from "react";
import {  useAPI } from "../context/dataFromApi";

export default function Character(){
    const path = window.location.pathname;
    const pathArr = path.split('/');


    const data = useAPI();
    
    console.log(data);
    

    let character;

    
    character = data.filter(character=>{
        const url = character.url.split('/');
        if(url[5]===pathArr[2]) return (character);
        return 0;
    });



    const printCharacter = character.map(character =>{
        // const url = character.url;
        // const urlArr = url.split('/');

        return character.name;
            
    })


    return <>
        <div>
            <h1>Welcome {(printCharacter)}</h1>
        </div>
    </>
}