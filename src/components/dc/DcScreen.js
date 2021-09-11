import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1>Computadoras</h1>
            <hr />

            <HeroList departamento="DC Comics" />

        </div>
    )
}
