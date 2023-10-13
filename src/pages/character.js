import { useEffect } from "react";
import { useState } from "react";

export default function Character(){
    const path = window.location.pathname;
    const pathArr = path.split('/');

    const [character, setCharacter] = useState([]);
    let data;
    useEffect(function(){
        data = fetch(`https://swapi.dev/api/people/${pathArr[2]}`,{
            headers:{
               'Content-Type':'Application/json',
            }
        }).then(res => res.json()).then(data => setCharacter(data));
    },[]);


    return <>
        <div>
            <h1>Welcome {character.name}</h1>
        </div>
    </>
}