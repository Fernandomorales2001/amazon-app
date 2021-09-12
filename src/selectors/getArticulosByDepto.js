import { productos } from '../data/depto';

export const getArticulosByDepto = ( departamento ) => {

    const validDeptos = ['Computadoras', 'Audifonos'];

    if ( !validDeptos.includes( departamento ) ) {
        throw new Error(`departamento "${ departamento }" no es correcto`);
    }

    return productos.filter( articulo => articulo.departamento === departamento );

}
