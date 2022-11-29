import classes from './Maps.module.scss'

import map2 from '../../assets/img/map2.png';
import info from '../../assets/img/info.png';

const Maps = () => {
    return(
        <div className={classes['Maps']}>
            <figure className={classes['fluid']}>
                <img src={map2} alt="map" />
            </figure>

            <figure className={classes['fluid-location']}>
                <img src={info} alt="map" />
            </figure>
        </div>
    )
}

export default Maps;