import classes from './AuthView.module.scss'

import Login from '../../components/AuthForms/LoginForm/LoginForm';
import RegisterForm from '../../components/AuthForms/RegisterForm/RegisterForm';
import { useUserConext } from '../../contexts/UserContext';
import UsersForm from '../../components/AdminForms/UsersForm/UsersForm';


import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import UsersForm from '../../components/AdminForms/UsersForm/UsersForm';

const AdminView = () => {
    const navigate = useNavigate();
    const {login, register, user} = useUserConext();


    return(
        <div className={classes['container']}>
            <div className={classes['card']}>
                <Routes>
                    <Route path="admin" element={<UsersForm/>}/>
                    
                    <Route path="*" element={<Navigate to="/NotFoundView_v2"/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AdminView;