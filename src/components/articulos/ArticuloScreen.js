import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getArticuloById } from '../../selectors/getArticuloById';

export const ArticuloScreen = ({ history }) => {

    const { articuloId } = useParams();

    const article = useMemo(() => getArticuloById( articuloId ), [ articuloId ]);

    if ( !article ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {
        titulo,
        departamento,
        marca,
        color,
        articulo,
    } = article;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/articulos/${ articuloId }.jpg` }
                    alt={ titulo }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { titulo } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Marca: </b> { marca } </li>
                    <li className="list-group-item"> <b> Departamento: </b> { departamento } </li>
                    <li className="list-group-item"> <b> Color: </b> { color } </li>
                </ul>

                <h5> Sobre este articulo </h5>
                <p> { articulo } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
