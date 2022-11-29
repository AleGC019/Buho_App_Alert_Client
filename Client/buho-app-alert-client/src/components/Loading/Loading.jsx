
import classes from './Loading.module.scss';

import {useConfigContext} from '../../contexts/ConfigContext';

const Loading = () => {

    const State = useConfigContext();



    const {loading} = useConfigContext();
    return(
        State.loading ?
        //Si es verdadero
        <div className={classes['container']}>
            {State.loading ? "Cargando" : "No cargando"}
            <div className={classes['lds-ring']}><div></div><div></div><div></div><div></div></div>
        </div>
        //Si es falso
        : <></>

    )
};

export default Loading;