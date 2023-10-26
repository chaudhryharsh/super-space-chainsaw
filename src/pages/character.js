
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  useAPI } from "../context/dataFromApi";

export default function Character(){
    const [printCharacter, updateCharacter] = useState();
    
    
    const data = useAPI();

    const path = window.location.pathname;
    const pathArr = path.split('/');


    let [character] = data.filter(character=>{
        const id = character.id;
        console.log(id);
        if(id==pathArr[2]) return (character);
        return 0;
    });

    const [h, seth] = useState();
    
    /*eslint-disable*/
    useEffect(()=>{
        updateCharacter(character);
    },[data]);
    
    

    /*eslint-enable*/
    // const printCharacter = character.map(character =>{
    //     return character.name;   
    // })
    const [isAdmin, setAdmin] = useState(false);

    function toggleAdmin(){
        setAdmin(!isAdmin);
    }
    

    return <>
        <section className="character-page">
            <div className="character-page-sidebar">
                <Link to="/"><h3>← Back</h3></Link>
                <h1>{printCharacter && printCharacter.fullName }</h1>
                <img src={printCharacter && printCharacter.imageUrl}></img>
            </div>
            <div className="character-page-main">
                <h2>Details</h2>
                <h4>Full Name : {printCharacter && character.fullName}</h4>
                <h4>Family : {printCharacter && character.family}</h4>
                <h4>Titles : {printCharacter && character.title}</h4>
                <div className="edit-bar">
                    {isAdmin?<button className="button-28">Edit</button>:""}
                    {isAdmin?<button className="button-28">Delete</button>:""}
                    {!isAdmin?<button className="button-28">Save</button>:""}
                    {!isAdmin?<button className="button-28" role="button" onClick={toggleAdmin}>Sign In</button>:""}

                </div>
            </div>
            
        </section>
    
    </>
    
}