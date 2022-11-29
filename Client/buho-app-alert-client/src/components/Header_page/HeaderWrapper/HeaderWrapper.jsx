import React from "react";
import {NavbarWrapper} from "./HeaderWrapper.module.jsx";
import { useNavigate } from 'react-router-dom';

import { useUserConext } from '../../../contexts/UserContext';




function Navbar({open}) {

  const navigate = useNavigate();
  const {logout, user} = useUserConext();

  return (

    

    <NavbarWrapper open={open}>
      
      {
        !user ?

        <>
        <a href="#"  onClick = { () => navigate("/")}> Mi perfil</a>
        <a href="#" onClick = { () => navigate("/")} >Descrubrir y Denunciar </a>
        <a href="#" onClick = { () => navigate("/")} > Mapa</a>
        <a href="#" onClick = { () => navigate("/")} > About us</a>

        </>:

        <>
          <a href="#"  onClick = { () => navigate("/user_profile")}> Mi perfil</a>
          <a href="#" onClick = { () => navigate("/Feed")} >Descrubrir y Denunciar </a>
          <a href="#" onClick = { () => navigate("/Maps")} > Mapa</a>
          <a href="#" onClick = { () => navigate("/aboutus")} > About us</a>
        </>
      }


      {
        !user ?
        <>
        
        <a href="#" onClick = { () => navigate("/auth/signup")} > Sign up</a>
        <a href="#" onClick = { () => navigate("/auth/signin")} > Sign in</a>
        </>:

        <>
        <a href="#" onClick = { () => { logout(); navigate("/")}}> Log out</a>
        </>
      }
     
    
      

    </NavbarWrapper>
  );
}

export default Navbar;