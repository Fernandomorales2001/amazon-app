import React from 'react'
import { ArticuloList } from '../articulos/ArticuloList'


export const ComputadorasScreen = () => {
    return (
        <div>
            <h1>Computadoras</h1>
            <hr />

            <ArticuloList departamento="Computadoras" />

        </div>
    )
}
