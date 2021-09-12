import { productos } from '../data/depto';


export const getArticulosByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return productos.filter( articulo => articulo.titulo.toLocaleLowerCase().includes( name )  );

}