import { productos } from '../data/depto';

export const getHeroesByPublisher = ( departamento ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if ( !validPublishers.includes( departamento ) ) {
        throw new Error(`departamento "${ departamento }" no es correcto`);
    }

    return productos.filter( hero => hero.departamento === departamento );

}
