import React from 'react'
import { ArticuloList } from '../articulos/ArticuloList'


export const audifonosScreen = () => {
    return (
        <div>
            <h1>Audifonos</h1>
            <hr />
            <ArticuloList departamento="Audifonos" />
        </div>
    )
}
