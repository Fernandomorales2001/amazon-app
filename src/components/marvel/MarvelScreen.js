import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Audifonos</h1>
            <hr />
            <HeroList departamento="Marvel Comics" />
        </div>
    )
}
