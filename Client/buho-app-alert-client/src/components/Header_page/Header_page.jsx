import classes from './Header_page.module.scss';

import logo from '../../assets/img/BuhoLogo.png';
import userImg from '../../assets/img/userprofile.png';
import Button2 from '../Button/Button';


import Button from '@mui/material/Button';

//import Menu from '../HeaderMenu/HeaderMenu';
//import MenuItem from '@mui/material/MenuItem';
import {useState} from 'react';

import { useNavigate } from 'react-router-dom';
import { useUserConext } from '../../contexts/UserContext';

import {GiHamburgerMenu} from 'react-icons/gi';




import Navbar from './HeaderWrapper/HeaderWrapper';
import MenuButton from "./MenuButton/MenuButton";



const Header = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const {logout, user} = useUserConext();
    const navigate = useNavigate();

    return (


        <header className = {classes['Header']}>
            
            <div className = {classes['logo']}>
                <figure onClick = { () => navigate("")}>
                    <img src={logo} alt="Buho" />
                </figure>
            </div>



            {
                    !user ? 
            <>
            <div className = {classes['Div-elements']}>
                <p className = {classes['Elements']} onClick = { () => navigate("/")}>
                    Descrubrir y Denuncia
                </p>

            

                <p className = {classes['Elements']} onClick = { () => navigate("/")}>
                    Mapa
                </p>

                <p className = {classes['Elements']} onClick = { () => navigate("/")}>
                    About us
                </p>
                
                <div className = {classes['Elements']} onClick = { () => navigate("/")}>

                
                    <figure className={classes['Icon-user']}>

                        <img id="menu-icon" src={userImg} alt="user" />

                    </figure>
                

                
                </div>
            </div>
            </>:
                      <div className = {classes['Div-elements']}>
                <p className = {classes['Elements']} onClick = { () => navigate("/Feed")}>
                    Descrubrir y Denuncia
                </p>

            

                <p className = {classes['Elements']} onClick = { () => navigate("/Maps")}>
                    Mapa
                </p>

                <p className = {classes['Elements']} onClick = { () => navigate("/aboutus")}>
                    About us
                </p>
                
                <div className = {classes['Elements']} onClick = { () => navigate("/user_profile")}>

                    <img className={classes['menu-icon']} src={userImg} alt="user"  />                
                
                </div>
            </div>
            }

            <div> 
                {
                    !user ? 
                <>
                <Button2 className={classes['Button']} onClick = { () => navigate("/auth/signin")}>
                    Sign in
                </Button2>

                <Button2 className={classes['Button']} onClick = { () => navigate("/auth/signup")}>
                    Sign up
                </Button2>
                </>:

                <>
                <Button className={classes['Button']} onClick = { () => { logout(); navigate("/")}}>
                    Log out
                </Button >
                </>

                }
            </div>

            <div className = {classes['Hamburger']}>
                <GiHamburgerMenu />
            </div>

            <div className= {classes['HeaderWrapper']}>
                <Navbar open={open} />
                <MenuButton open={open} handleClick={handleClick} />
            </div>

           




        </header>
        

        
    );

    

    
}


export default Header;


