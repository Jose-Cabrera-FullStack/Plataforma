import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/ResponsiveMessage.scss';

const ResponsiveMessage = () => {

return (
        <div className="responsive__message">
            <h1 className="responsive__message__title">Entra desde un Computador</h1>
            <p className="responsive__message__text">ASÍ PODRAS ESCOGER EL DIA DE LA CLASE. TE ESPERAMOS</p>
            <Link to="/home"> 
                <button className="btn__secondary btn__secondary--fix">
                    VUELVE AL INICIO
                </button>
            </Link>
        </div>
    );
};

export default ResponsiveMessage;
