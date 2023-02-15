import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import logo2 from '../../../assets/Logo2.jpg';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={logo2} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/Camperas">Camperas</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/Sweaters">Sweaters</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                to="/productos/Chalecos">Chalecos</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
