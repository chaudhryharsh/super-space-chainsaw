import { Link } from "react-router-dom";
export default function About(){
    return (
        <div className="about-page">
            <Link to="/"><h3>← Back</h3></Link>
            <div className="about-page-info">
                <h1>About the Site</h1>    
            </div>
        </div>
    );
}