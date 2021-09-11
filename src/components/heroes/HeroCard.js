import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    titulo,
    marca,
    color,
    articulo,
}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ `./assets/heroes/${ id }.jpg` } className="card-img" alt={ titulo } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { titulo } </h5>
                        <p className="card-text"> { marca} </p>

                        {
                            ( marca !== articulo ) 
                                && <p className="card-text"> { articulo } </p>
                        }

                        <p className="card-text">
                            <small className="text-muted"> { color } </small>
                        </p>

                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}
