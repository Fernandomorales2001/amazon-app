import React, { useMemo } from 'react';
import { getArticulosByDepto } from '../../selectors/getArticulosByDepto';
import { ArticuloCard } from './ArticuloCard';

export const ArticuloList = ({ departamento }) => {

    const heroes = useMemo(() => getArticulosByDepto( departamento ), [ departamento ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map( hero => (
                   <ArticuloCard
                        key={ hero.id }
                        { ...hero }
                    />
                   
               ))
           } 
        </div>
    )
}