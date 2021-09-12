import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';



import { SearchScreen } from '../components/search/SearchScreen';
import { ComputadorasScreen } from '../components/computadoras/ComputadoraScreen';
import { audifonosScreen } from '../components/audifonos/audifonosScreen';
import { ArticuloScreen } from '../components/articulos/ArticuloScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/audifonos" component={ audifonosScreen } />
                    <Route exact path="/hero/:heroeId" component={ ArticuloScreen } />
                    <Route exact path="/computadoras" component={ ComputadorasScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/audifonos" />
                </Switch>
            </div>


        </>
    )
}
