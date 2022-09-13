import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import CartWidget from "./CartWidget";
import Button from 'react-bootstrap/Button';

const NavBar = () => {

    return (
        <header id="header">
            <Link to="/">
                <img src="./logo.bt2.png" alt="" />
            </Link>
            <nav>
                <Button variant="outline"><NavLink as={Link} to="/category/bikini">Bikinis</NavLink></Button>
                <Button variant="outline"><NavLink as={Link} to="/category/enteriza">Enterizas</NavLink></Button>
                <Button variant="outline"><CartWidget /></Button>
            </nav>
        </header>
    )
}

export default NavBar;