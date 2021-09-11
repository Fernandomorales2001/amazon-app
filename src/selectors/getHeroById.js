import { productos } from '../data/depto';

export const getHeroById = ( id ) => {

    return productos.find( hero => hero.id === id );

}
