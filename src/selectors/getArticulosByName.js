import { productos } from '../data/depto';


export const getArticulosByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return productos.filter( hero => hero.titulo.toLocaleLowerCase().includes( name )  );

}