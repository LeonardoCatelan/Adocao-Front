import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import adocaopericles from './adocaopericles';
import adocaoindex from './adocaoindex';
import adocaocadastro from './adocaocadastro';
import adocaousuario from './adocaousuario';


const PrivateRoute = ({ component: Component, ...rest }) => 
(

    <Route {...rest} render={props => (
         
        verificarId() ?
            (<Component {...props} />)
            :
            (<Redirect to="/" />)
    )}

    />
);


function verificarId(){
    var temId = false;
    if(sessionStorage.getItem("id")){
        temId = true;
    }
    return temId;
}

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/pericles' component={adocaopericles} />
            <Route exact path='/' component={adocaoindex} />
            <Route path='/cadastro' component={adocaocadastro} />
            <PrivateRoute path='/usuario' component={adocaousuario} />
        </Switch>
    </BrowserRouter>);

export default Routes;