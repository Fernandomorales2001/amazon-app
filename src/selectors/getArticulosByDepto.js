import { productos } from '../data/depto';

export const getArticulosByDepto = ( departamento ) => {

    const validPublishers = ['Computadoras', 'Audifonos'];

    if ( !validPublishers.includes( departamento ) ) {
        throw new Error(`departamento "${ departamento }" no es correcto`);
    }

    return productos.filter( hero => hero.departamento === departamento );

}
