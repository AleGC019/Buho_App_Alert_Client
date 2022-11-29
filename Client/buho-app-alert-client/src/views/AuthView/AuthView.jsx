import classes from './AuthView.module.scss'

import Login from '../../components/AuthForms/LoginForm/LoginForm';
import RegisterForm from '../../components/AuthForms/RegisterForm/RegisterForm';
import { useUserConext } from '../../contexts/UserContext';



import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const AuthView = () => {
    const navigate = useNavigate();
    const {login, register, user} = useUserConext();

    const onLoginHandler = async (identifier, password) => {
        //ejecutar el servicio del login <- user context 

            //esperamos el resultado del login
        await login(identifier, password);

    }

    const onRegisterHandler = async (username, email, password, description) => {
    
        await register(username, email, password, description); 

    }

    const onAdminHandler  = () => {
        
    }

    useEffect ( () => {
        if(user) { 
            if(user.roles == 'admin'){
                navigate('/admin/admin');
            }else if (user.roles == 'user'){
                navigate("/");
            }
            
        }
    }, [user])
    
    return(
        <div className={classes['container']}>
            <div className={classes['card']}>
                <Routes>
                    <Route path="signup" element={<RegisterForm onRegister={onRegisterHandler}/>}/>
                    <Route path="signin" element={<Login onLogin={onLoginHandler}/>}/>
                    <Route path="*" element={<Navigate to="/NotFoundView_v2"/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AuthView;