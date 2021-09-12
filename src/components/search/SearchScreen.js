import React, { useMemo } from 'react';
import queryString from 'query-string';
import { ArticuloCard } from '../articulos/ArticuloCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getArticulosByName } from '../../selectors/getArticulosByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getArticulosByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Buscador</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Buscador de articulos </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Busca el arituclo de tu preferencia"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Busca un articulo
                            </div>
                    }

                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                No existe ese producto, intente de nuevo { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <ArticuloCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
