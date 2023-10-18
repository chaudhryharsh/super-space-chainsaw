import { useContext } from "react";
import { shareData, useAPI } from "../context/dataFromApi";

export default function Character(){
    const path = window.location.pathname;
    const pathArr = path.split('/');
    console.log(pathArr[2]);

    const data = useAPI();
    
    console.log(data);

    const [currentCharacter] = data.filter(character=>{
        const url = character.url.split('/');
        if(url[5]===pathArr[2]) return character;
    });


    return <>
        <div>
            <h1>Welcome {currentCharacter.name}</h1>
        </div>
    </>
}