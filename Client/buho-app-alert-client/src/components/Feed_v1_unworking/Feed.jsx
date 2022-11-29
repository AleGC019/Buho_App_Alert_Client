import { useState, useEffect } from 'react';
import classes from './Feed.module.scss';

import NewPostForm from "./NewPostForm/NewPostForm";
import Posts from "./Posts/Posts";

//import { toast } from 'react-toastify';
//import axios from 'axios';
import { useConfigContext } from '../../contexts/ConfigContext';

const Feed = () => {
    return (
        <div className={classes["feed-wrapper"]}>
            {/* Formulario */}
            <NewPostForm/>

            </div>


       

    )
}

export default Feed;