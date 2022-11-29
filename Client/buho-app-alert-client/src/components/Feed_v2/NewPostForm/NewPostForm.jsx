import { useState } from 'react';
import classes from './NewPostForm.module.scss';
import Button from '../../Button/Button';
import { toast } from 'react-toastify';
import mapa from '../../../assets/img/mapa.png';

const NewPostForm = ({onAddPost = () => {}}) => {

    const[titleField, setTitle] = useState('');
    const[descriptionField, setDescription] = useState('');
    const[imageField, setImage] = useState('');

    const error ={
        "title": !titleField,
        "description": !descriptionField || descriptionField.length > 280,
        "image": imageField.length > 0 && !(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi).test(imageField)
    }

    const hasError = () => {
        return Object.values(error).some(error => error);
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(hasError()){
            toast.warn("Please fill all the fields correctly");
            return;
        }


        onAddPost(titleField, descriptionField, imageField);

        setTitle('');
        setDescription('');
        setImage('');
    }

    return(
        
            <section className={classes['post-form-section']}>
    

                <form className={classes['post-form']} onSubmit={onSubmitHandler}>

                    <h3> ¡Déjanos saber cuál es el problema! </h3>

                    <label>
                        ¿Qué esta pasando? *
                        <input 
                            name='title' 
                            className={error['title'] ? classes['error'] : ''}
                            value={titleField} 
                            placeholder='Escribe un titulo para el problema'
                            onChange = {(event) => {setTitle(event.target.value)}}
                            required/>
                    </label>
                
                    <label>
                        Danos una descripción del problema *
                        <textarea 
                            name='description' 
                            className={error['description'] ? classes['error'] : ''}
                            rows={5} 
                            placeholder='Escribe una descripción del problema'
                            value={descriptionField}
                            onChange = {(event) => {setDescription(event.target.value)}}
                            required />
                        <div className={classes['chars-left']}>
                            {descriptionField.length} / 280
                        </div>
                    </label>
                    
                    <label>
                        Muestranos
                        <input 
                            name='image' 
                            className={error['image'] ? classes['error'] : ''}
                            type="url"
                            placeholder='https://example.com/image.png'
                            value={imageField}
                            onChange = {(event) => {setImage(event.target.value)}}
                        />
                    </label>

                    <Button type="submit" disabled={hasError()}>
                        Save Post
                    </Button>
                    
                </form>

                <div>
                    <figure>
                        <img src={mapa} />
                    </figure>
                </div>
            </section>

    )
}

export default NewPostForm;
