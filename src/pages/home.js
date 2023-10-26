
import { Link } from "react-router-dom";
import {  useAPI } from "../context/dataFromApi";
import banner from "../game-of-thrones.jpg";


export default function Home(){

    // let [characters, setCharacters] = useState([]);
    
    let characters = useAPI();
    // useEffect(function(){
    //     setCharacters(data);
    // },[]);
    // useEffect(function(){
    //     data = fetch('https://swapi.dev/api/people/',{
    //         headers :{
    //             'Content-Type':'Application/json',
    //         },
    //     }).then(res => res.json()).then(data => setCharacters(data.results));
    // },[]);

    
    const printCharacters = characters.map(character =>{
        const id = character.id;

        return <Link className="character-div-child" to={`character/${id}`} key={`character/${id}`}>
            <img src={character.imageUrl}></img>
            <h3>{character.fullName}</h3>
            <h4>{character.family}</h4>
            </Link>
    })



    return <>
    <img id="banner-img" src={banner}></img>
    <div className="character-div"> 
            {printCharacters}
        </div>
    </>;
}