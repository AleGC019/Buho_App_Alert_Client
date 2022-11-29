import classes from './Aboutus.module.scss'
import Fer from '../../assets/img/fotoFer.png';
import Alejandro from '../../assets/img/fotoAlejandro.png';
import Pamela from '../../assets/img/fotoPamela.png';

const Welcome = () => { 
    return(
        <div className={classes['Aboutus']}>
            <div className={classes['section']}>
                <div className={classes['centered-quote']}>
                    
                    <h3>About Us</h3>
                        

                </div>
                
            </div>

            <div className={classes['section']}>

                <div className={classes['left-quote']}>
                    
                    
                    <h3> Qué es </h3>
                    <h3>  BÚHO. </h3>

                </div>  
                <div className={classes['centered-quote']}>     
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                    
                    </p>
                </div>      

                
                        

                
            </div>

            <div className={classes['section']}>
                
            <div className={classes['left-quote']}>
                    <h3>Nuestro equipo</h3>
                        
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                    </p>
                </div>
            </div>

            <div className={classes['section']}>

                <div className={classes['container']}>
                    <div className={classes['team-card']}>

                        <figure className={classes['fluid']}>
                            <img src={Alejandro} alt="alejandro" />
                        </figure>
                    </div>
                </div>

                <div className={classes['container']}>
                    <div className={classes['team-card']}>

                    <figure className={classes['fluid']}>
                            <img src={Pamela} alt="pamela" />
                        </figure>

                    </div>
                </div>

                <div className={classes['container']}>
                    <div className={classes['team-card']}>

                    <figure className={classes['fluid']}>
                            <img src={Fer} alt="fer" />
                        </figure>

                    </div>
                </div>


 
                        
                
            </div>

        </div>
    );
}

export default Welcome