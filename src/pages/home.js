import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(){

    const [characters, setCharacters] = useState([]);
    
    let data;
    useEffect(function(){
        data = fetch('https://swapi.dev/api/people/',{
            headers :{
                'Content-Type':'Application/json',
            },
        }).then(res => res.json()).then(data => setCharacters(data.results));
    },[]);

    

    const printCharacters = characters.map(character =>{
        const url = character.url;
        const urlArr = url.split('/');

        return <Link className="character-div-child" to={`character/${urlArr[5]}`}>
            <h3>{character.name}</h3>
            <h3>{character.height}</h3>
            <h3>{character.mass}</h3>
            <h3>{character.hair_color}</h3>
            </Link>
    })

    return (
        <div className="character-div"> 
            {printCharacters}
        </div>
    );
}