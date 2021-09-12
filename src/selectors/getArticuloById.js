import { productos } from '../data/depto';

export const getArticuloById = ( id ) => {

    return productos.find( articulo => articulo.id === id );

}
