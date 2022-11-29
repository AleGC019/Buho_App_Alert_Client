import NewPostForm from "../../components/Feed_v2/NewPostForm/NewPostForm";
import Post from "../../components/Feed_v2/Posts/Posts";
import { useConfigContext } from "../../contexts/ConfigContext";


import classes from './FeedView.module.scss';

import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import axios from "axios";

import { useUserConext } from "../../contexts/UserContext";





const FeedView = () => {
    const [posts, setPosts] = useState([]);
    const {startLoading, stopLoading} = useConfigContext();
    const {token, user} = useUserConext();


    useEffect(() => {fetchPosts()}, []);

    const fetchPosts = async () => {
        try{

            startLoading();

            const {data} = await axios.get('/post');
            setPosts(data.posts);


        }catch(error){
            toast.error('Error fetching posts');
        }finally{
            stopLoading();
        }

    }

    const savePost = async (title, description, image) => {
        try{
            
            

            startLoading();

            await axios.post('/post', { title, description, image }, { headers: {authorization: `Bearer ${token}` }});
            toast.success('Post saved'); 

        }catch(error){

            const {status} = error.response || {status: 500};

            const msg = {
                400: 'Bad request',
                404: 'Post not found',
                500: 'Internal server error'
            }

            toast.error(msg[status.toString()] || 'Error saving post');
        }finally{
            stopLoading();
        }
    }

    const onAddPostHandler = async (title, description, image) => {
        

        await savePost(title, description, image);
        fetchPosts();
    }
    

    return(
        <div className={classes["news-publish"]}>
            <div className={classes["feed-wrapper"]}>

                    {/* Formulario de creacion*/}
                    <div className={classes["center"]}>
                        { user && <NewPostForm onAddPost={onAddPostHandler} />}
                    </div>
                    

                    {/* Lista de posts - Main Feed - Muestra de elementos */}
                    <Post posts={posts}/>
            </div>

            <div className={classes["news"]}>
                <h3>
                    Noticias
                </h3>
                <div className={classes['section']}>

                    <div className={classes['container']}>
                        <div className={classes['team-card']}>

                            <p>
                            <b>Conversatorio virtual: </b>“Prospectiva y planificación en la era de la inteligencia 
                            artificial en América Latina y el Caribe. ¿Cómo salir del entrampamiento?”
                            </p>
                        
                        </div>
                    </div>

                    <div className={classes['container']}>
                        <div className={classes['team-card']}>

                        <p>
                        Estudio sobre edificios de cero energía neta gana premio en investigación científica22/10/2019Academia

                        </p>

                        </div>
                    </div>

                    <div className={classes['container']}>
                        <div className={classes['team-card']}>

                        <p>
                        Octava entrega de becas a la excelencia06/01/2021    
                        </p>

                        </div>
                    </div>

                    <div className={classes['container']}>
                        <div className={classes['team-card']}>

                        <p>
                        Mirada estructural a la situación socioeconómica salvadoreña08/10/2019
                        </p>

                        </div>
                    </div>

                    <div className={classes['container']}>
                        <div className={classes['team-card']}>

                        <p>
                        Radio YSUCA
                        Se mantienen al alza los precios en los productos de la canasta básica
                        21/11/2022
                        </p>

                        </div>
                    </div>

                    <div className={classes['container']}>
                        <div className={classes['team-card']}>

                        <p>
                        Estudiantes UCA obtienen primer 
                        lugar en concurso de audiencias temáticas ante la CIDH23/09/2022 | 
                        </p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FeedView;