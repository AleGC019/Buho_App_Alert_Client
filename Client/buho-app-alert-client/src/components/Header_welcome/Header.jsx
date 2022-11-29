import classes from './Header.module.scss';


const Header = () => {
    return (
        <header className = {classes['Header']}>
            
            <div className = {classes['logo']}>
                <figure>
                    <img src='./src/assets/img/BuhoLogo.png' />
                </figure>
            </div>
            
            <div className = {classes['Buho']}>
                <p>
                    BÚHO
                </p>
            </div>

            <div>
                <button className={classes['Button']}>
                    Sign up
                </button>
            </div>

            <div className = {classes['Hamburger']}>
                <figure>
                    <img id="menu-icon" src="./assets/icons/menu.png" alt="logo" />
                </figure>
            </div>

            <div className={classes['respmenu']} >
            
                <input type="checkbox"/>
                
                <i className={classes['fas fa-bars']}></i>
                
                <i className={classes['fas fa-times']}></i>
                <nav>
                    <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                    <li><a href="#">Item 5</a></li>
                    </ul>
                </nav>

            </div>


        </header>
    );
}

export default Header;