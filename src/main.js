import { Link, Outlet } from 'react-router-dom';

const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png";

export default function Main(){
    return (
        <div>
        <header className="header">
            <div className="logo-div">
                <Link className='header-ele' to='/'>
                    <img src={url} className="header-logo" alt='header-logo'/>
                </Link>
            </div>
            <div>
                <Link className='header-ele' to='/'>Home</Link>
                <Link className='header-ele' to='/about'>About</Link>
            </div>
        </header>
        <Outlet/>
        </div>
    );
}