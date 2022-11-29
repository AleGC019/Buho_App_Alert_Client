
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


import { useConfigContext } from './ConfigContext';
import axios from "axios";
import { Navigate } from "react-router-dom";

const TOKEN_KEY = "token_buhopoject";

const UserContext = React.createContext();

export const UserContextProvider = (props) => {

    //estado para el token
    //estado para los datos de usuarios
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    //destructurar el start Loading 

    const {startLoading, stopLoading} = useConfigContext();

    //Efecto para verificar la existencia del token 
    useEffect(() => {
        //obtiene el token aux de mi LS y si el token no es nulo, entonces seteamos a token 

        const _token = getTokenLS();

        if(_token){
            setToken(_token);  //
        }

    })

    //Efecto para verificar el usuario, Va a responder cuando un token cambie

    useEffect(()=> {
        //obtener la informacion del usuario 
        fetchUserInfo();


    }, [token])

    const fetchUserInfo = async () => {
        if (!token) {
            return;
        }

        startLoading();
        try{

            const { data } = await axios.get("/auth/whoami", { headers: {authorization: `Bearer ${token} `}});
            setUser(data)

        }catch (error) {

            logout();

        }finally {
            stopLoading();
        }
    }



    //funcion para login 

    const login = async (identifier, password) => {
        try{
            const {data} = await axios.post("/auth/signin", {identifier, password})

            console.log(data);

            startLoading();

            //token de respuesta 
            const _token = data.token;

            setToken(_token); //guardamos en LS nuestro token, al inciar sesion de nuevo podemos sacarlo sin problema 
            setTokenLS(_token);

            toast.success("Sign in successful");    

        }catch (error){
            const {status} = error.response || {status: 500};
            const msgs = {
                "404": "User not found",
                "401": "Unauthorized",
                "500": "Unexpected error"
            };


            logout();

            toast.error(msgs[String(status)]);

        }finally{
            stopLoading();
        }
    }
    //funcion para logout 
    //funcion para register 

    const logout = ()=> {
        removeTokenLS();
        setToken(null);
        setUser(null);
  
    }

    const register = async (username, email, password, description) => {

        
        try{

            await axios.post("/auth/signup", { username, email, password, description});

            startLoading();

            toast.success("Signup successful");   

        }catch (error){

            const {status} = error.response || {status: 500};
            const msgs = {
                "400": "Wrong fiel",
                "409": "User already exist",
                "500": "Unexpected error"
            };


            toast.error(msgs[String(status)]);


        }finally {
            stopLoading();
        }

    }

    const state = {
        token,
        user,
        login,
        logout,
        register
         
        
    }

    return <UserContext.Provider value={state} {...props}/>
}

//Funcion que nos permite consumir de los estados 

export const useUserConext = () => {
    const context = React.useContext(UserContext);

    if(!context){
        throw new Error("useUserContext must be call inside of a UserContextProvider component")
    }

    return context;
}

//Funcion de Local storage 

const setTokenLS = (token) => localStorage.setItem(TOKEN_KEY, token);
const getTokenLS = () => localStorage.getItem(TOKEN_KEY);
const removeTokenLS  = () => localStorage.removeItem(TOKEN_KEY);
// Borrarlo y dejarlo limpio 

