import { productos } from '../data/depto';

export const getArticuloById = ( id ) => {

    return productos.find( hero => hero.id === id );

}
