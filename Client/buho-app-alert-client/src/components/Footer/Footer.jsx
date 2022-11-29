import classes from './Footer.module.scss'
import footerimg from '../../assets/img/buhoFooter.png';

import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();
    
    return(
        <footer className = {classes['footer']}>
            <figure className = {classes['footer-img']} onClick = { () => navigate("/")}>
                <img className = {classes['img']} src={footerimg} alt="Logo" />
            </figure>

            <section className = {classes['social-media']} onClick = { () => navigate("")}>
                <a href="" className = {classes['a']} >BÚHO</a>
            </section>
                
            <section  className = {classes['footer-links']}  >
                <a href="#" className = {classes['a']} onClick = { () => navigate("/aboutus")}>About us</a>
                <a href="#" className = {classes['a']} onClick = { () => navigate("/contactus")}>Contacto</a>
            </section>
        </footer>
    );
}

export default Footer;