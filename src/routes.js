import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import adocaopericles from './adocaopericles';
import adocaoindex from './adocaoindex';
import adocaocadastro from './adocaocadastro';
import adocaoadotante from './adocaoadotante';
import adocaousuario from './adocaousuario';

/*
const PrivateRoute = ({ component: Component, levelRequired: levelRequired, ...rest }) => 
(

    <Route {...rest} render={props => (
         
        localAuthentication(levelRequired) ?
            (<Component {...props} />)
            :
            (<Redirect to="/" />)
    )}

    />
);
*/
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/pericles' component={adocaopericles} />
            <Route path='/index' component={adocaoindex} />
            <Route path='/cadastro' component={adocaocadastro} />
            <Route path='/adotante' component={adocaoadotante} />
            <Route path='/usuario' component={adocaousuario} />
        </Switch>
    </BrowserRouter>);

export default Routes;