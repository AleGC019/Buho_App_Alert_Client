import classes from './Welcome.module.scss'

import welcomeIm1 from '../../assets/img/welcomeImg1.png';
import welcomeIm2 from '../../assets/img/welcomeImg2.png';
import welcomeIm3 from '../../assets/img/welcomeImg3.png';
import welcomeIm4 from '../../assets/img/welcomeImg4.png';


const Welcome = () => { 
    return(
        <div className={classes['Welcome']}>
            <div className={classes['section']}>
                <div className={classes['centered-quote']}>
                    
                    <h3>La seguridad de la universidad a un click.</h3>
                        
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                    </p>
                </div>
                        
                <figure>
                    <img className={classes['fluid']} src={welcomeIm1} alt="Access" />
                </figure>
                
            </div>

            <div className={classes['section']}>

                 <figure>
                    <img className={classes['fluid']} src={welcomeIm2} alt="Access" />
                </figure>

                <div className={classes['centered-quote']}>
                    
                    <h3>Una cuenta, todos los beneficios.</h3>
                        
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                    </p>
                </div>
                        

                
            </div>

            <div className={classes['section']}>
                <div className={classes['centered-quote']}>
                    
                    <h3>Desde cualquier dispositivo.</h3>
                        
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                    </p>
                </div>
                        
                <figure>
                    <img className={classes['fluid']} src={welcomeIm3} alt="Access" />
                </figure>
                
            </div>

            <div className={classes['section']}>

                <figure>
                    <img className={classes['fluid']} src={welcomeIm4} alt="Access" />
                </figure>

                <div className={classes['centered-quote']}>
                    
                    <h3>Conoce los lugares donde hay problems.</h3>
                        
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in laboriosam consectetur rerum rem dolores repudiandae mollitia, sed perferendis cupiditate enim nostrum eveniet dignissimos ipsum vero? Nostrum ut cumque aspernatur.
                    </p>
                </div>
                        
                
            </div>

        </div>
    );
}

export default Welcome